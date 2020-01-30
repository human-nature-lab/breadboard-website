const validateEnv = require('./validate-env')
module.exports = async function sendEmail (descriptor) {
  const envResult = validateEnv('MAILGUN_API_KEY', 'MAILGUN_DOMAIN', 'MAILGUN_URL')
  if (envResult !== true) {
    return envResult
  }
  const { MAILGUN_API_KEY, MAILGUN_DOMAIN, MAILGUN_URL } = process.env
  const mailgun = require('mailgun-js')({ apiKey: MAILGUN_API_KEY, domain: MAILGUN_DOMAIN, url: MAILGUN_URL })
  try {
    await mailgun.messages().send(descriptor)
    return {
      statusCode: 200,
      body: 'Successful!'
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: err.message
    }
  }
}
