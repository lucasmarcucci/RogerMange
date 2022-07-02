// require("./config/database").connect();
require("dotenv").config();
const express = require("express");
const User = require("./model/User");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const app = express();

app.use(express.json());

module.exports = app;

const config = process.env;
const auth = require("./middleware/auth");

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});

app.post("/login", async (req, res) => {

  const email = req.body.client_email;
  const password = req.body.client_password;

  var user = await User.findOne({where: { client_email: email }})

  if(user && (await bcrypt.compare(password, user.toJSON().client_password))) {

      const token = jwt.sign({ id: user.toJSON().id, status: user.toJSON().status }, process.env.JWT_SECRET, {expiresIn: "2h"});
      res.send(token);
  } else {
      res.status(400).send("Invalid Credentials");
  }
});

app.post("/logout", async (req, res) => {
  res.send("Successfully disconnected")
});

app.get("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});

