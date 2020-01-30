require('dotenv').config()
module.exports = function validateEnv (...expectedVars) {
  for (const varName of expectedVars) {
    if (!process.env[varName]) {
      return {
        statusCode: 500,
        body: `${varName} environment variable must be defined`
      }
    }
  }
  return true
}