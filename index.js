/**
 * External Modules
 */
const express = require("express");
const path = require("path");
const WorkOS = require('@workos-inc/node').default;
require('dotenv').config()
process.on('unhandledRejection', (reason, p) => { throw reason });
const bodyParser = require('body-parser');
var parser = require('tld-extract');

/**
 * App Variables
 */
const app = express();
const port = "8000";
const workos = new WorkOS(process.env.WORKOS_API_KEY);
const projectID = process.env.WORKOS_PROJECT_ID;

/**
 *  App Configuration
 */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Route Definitions
 */
 app.get("/", async (req, res) => {
  res.render("index", {
    title: "Home",
  });
});

app.post('/passwordless-auth', async (req, res) => {
  const email = req.body.email
  const session_options = {
    email,
    type: 'MagicLink',
  };
  // API call to generate a new passwordless session.
  const session = await workos.passwordless.createSession(session_options);

  // API call to send email, passing in session ID generate above.
  await workos.passwordless.sendSession(session.id);

  res.redirect('/confirmation');
});

app.get("/confirmation", async (req, res) => {
  res.render("confirmation", {
    title: "Confirmation",
  });
});

app.get("/success", async (req, res) => {
  res.render("success", {
    title: "Success",
  });
});
/**
 * Server Activation
 */
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
