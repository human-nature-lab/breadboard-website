// with thanks to https://github.com/Urigo/graphql-modules/blob/8cb2fd7d9938a856f83e4eee2081384533771904/website/lambda/contact.js
const { validateEmail, validateLength } = require('./validations')

exports.handler = async (event) => {
  require('dotenv').config()
  const expectedVars = ['MAILGUN_API_KEY', 'MAILGUN_DOMAIN', 'MAILGUN_URL', 'FROM_EMAIL_ADDRESS', 'CONTACT_EMAILS']
  for (const varName of expectedVars) {
    if (!process.env[varName]) {
      return {
        statusCode: 500,
        body: `${varName} environment variable must be defined`
      }
    }
  }

  const { MAILGUN_API_KEY, MAILGUN_DOMAIN, MAILGUN_URL, FROM_EMAIL_ADDRESS, CONTACT_EMAILS } = process.env
  const mailgun = require('mailgun-js')({ apiKey: MAILGUN_API_KEY, domain: MAILGUN_DOMAIN, url: MAILGUN_URL })

  console.log('event', event)
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

  const descriptor = {
    from: `"${body.email}" <${FROM_EMAIL_ADDRESS}>`,
    to: CONTACT_EMAILS,
    subject: `${body.name} <${body.phone}> from breadboard.yale.edu`,
    text: body.message
  }

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
