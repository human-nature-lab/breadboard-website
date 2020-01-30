const validateEnv = require('./services/validate-env')
const sendEmail = require('./services/send-email')
const { validateEmail, validateLength } = require('./services/validations')

exports.handler = async (event) => {
  const envResult = validateEnv('FROM_EMAIL_ADDRESS', 'CONTACT_EMAILS', 'URL')
  if (envResult !== true) {
    return envResult
  }
  const { FROM_EMAIL_ADDRESS, CONTACT_EMAILS, URL } = process.env
  const body = JSON.parse(event.body)

  try {
    validateLength('Name', body.name, 3, 50)
    validateEmail('Email', body.email)
    validateLength('Message', body.message, 3, 1000)
    validateLength('Phone', body.phone, 3, 10)
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
