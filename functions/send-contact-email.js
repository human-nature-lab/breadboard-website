const validateEnv = require('./services/validate-env')
const sendEmail = require('./services/send-email')
const { validateEmail, validateLength } = require('./services/validations')
const { blocklist } = require('./services/blocklist')

function logEvent(event, body) {
  // Minimal, safe request logging
  const headers = event.headers || {}
  const ip =
    headers['x-nf-client-connection-ip'] ||
    headers['client-ip'] ||
    (headers['x-forwarded-for'] ? headers['x-forwarded-for'].split(',')[0].trim() : undefined) ||
    headers['x-real-ip'] ||
    'unknown'

  console.log(
    JSON.stringify(
      {
        msg: 'contact form request',
        method: event.httpMethod,
        path: event.path,
        ip,
        userAgent: headers['user-agent'],
        referer: headers['referer'] || headers['referrer'],
        // Avoid logging the entire body; include only non-sensitive fields if needed
        bodyPreview: {
          name: body?.name,
          email: body?.email,
          phone: body?.phone ? '[redacted]' : undefined
        }
      },
      null,
      0
    )
  )
}

exports.handler = async (event) => {
  const envResult = validateEnv('FROM_EMAIL_ADDRESS', 'CONTACT_EMAILS', 'URL')
  if (envResult !== true) {
    return envResult
  }
  const { FROM_EMAIL_ADDRESS, CONTACT_EMAILS, URL } = process.env
  const body = JSON.parse(event.body)
  try {
    logEvent(event, body)
  } catch (e) {
    console.error('Error logging event:', e)
  }

  try {
    validateLength('Name', body.name, 3, 50)
    validateEmail('Email', body.email)
    validateLength('Message', body.message, 20, 1000)
    validateLength('Phone', body.phone, 3, 10)
    if (blocklist.isBlocked(ip)) {
      console.log(JSON.stringify({
        msg: 'IP blocked',
        ip,
        bodyPreview: {
          name: body?.name,
          email: body?.email,
          phone: body?.phone ? '[redacted]' : undefined
        }
      }))
      return {
        statusCode: 403,
        body: 'Invalid request'
      }
    }
  } catch (e) {
    return {
      statusCode: 403,
      body: e.message
    }
  }
  
  let subject = `${body.name} (${body.email})`
  if (body.phone && body.phone.length > 3) {
    subject += ` <${body.phone}>`
  }
  subject += ` from ${URL}`
  return sendEmail({
    from: `"${body.email}" <${FROM_EMAIL_ADDRESS}>`,
    to: CONTACT_EMAILS.replace(';', ','),
    subject: subject,
    text: body.message
  })
}