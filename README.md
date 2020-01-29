# Breadboard Website
The breadboard.yale.edu website is currently hosted via the Netlify platform. It is a static website which uses Netlify functions
to handle sending an email in response to a contact form.

See [Netlify Forms](https://docs.netlify.com/forms/setup/) and [Netlify Functions](https://docs.netlify.com/functions/overview/) for more information.

## Local testing
Netlify has support for testing their features locally via the [Netlify CLI](https://docs.netlify.com/cli/get-started/).
Before testing run `npm i -g netlify-cli` to install the command-line tool globally.

To simulate the Netlify build process and start a dev server run `netlify dev`

To simulate a form submission to our server run `netlify functions:invoke send-contact-email --no-identity --payload "{\"email\": \"yourname@example.com\", \"name\": \"Test user 1\", \"message\": \"Hello, World!\", \"phone\": \"123456789\"}"`

Note: The dev server needs to be running and your *.env* file needs to be complete for the form submission to work