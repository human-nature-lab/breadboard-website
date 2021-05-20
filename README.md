# Breadboard Website
[![Netlify Status](https://api.netlify.com/api/v1/badges/91fee330-078d-4824-ae06-ced5e4888b31/deploy-status)](https://app.netlify.com/sites/wizardly-kepler-096cf8/deploys)

The breadboard.yale.edu website is currently hosted via the Netlify platform. It is a static website which uses Netlify functions
to handle sending an email in response to a contact form.

See [Netlify Forms](https://docs.netlify.com/forms/setup/) and [Netlify Functions](https://docs.netlify.com/functions/overview/) for more information.

## Development
The docs are generated with VuePress which has a development server. `npm start` will launch a dev server for the breadboard documentation.

The rest of the site is just plain html, css and js files and can be edited directly.
## Local email testing
Netlify has support for testing their features locally via the [Netlify CLI](https://docs.netlify.com/cli/get-started/).
Before testing run `npm i -g netlify-cli` to install the command-line tool globally.

To simulate the Netlify build process and start a dev server run `netlify dev`

To simulate a form submission to our server run `netlify functions:invoke send-contact-email --no-identity --payload "{\"email\": \"yourname@example.com\", \"name\": \"Test user 1\", \"message\": \"Hello, World!\", \"phone\": \"123456789\"}"`

Note: The dev server needs to be running and your *.env* file needs to be complete for the form submission to work
