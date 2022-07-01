const express = require("express");
const router = express.Router();
const mysql = require("mysql");
require("dotenv").config();
const bcrypt = require("bcryptjs")

const Account = require("../Account");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

//get all users
router.get("/register", (req, res) =>
  Account.findAll()
    .then((accounts) => {
      console.log(accounts);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err))
);

//get one user by ID
router.get("/register/:id", (req, res) =>
  Account.findOne({
    where: { id: req.params.id },
  })
    .then((accounts) => {
      console.log(accounts);
      res.send(accounts);
    })
    .catch((err) => console.log(err))
);

//delete one user by ID
router.delete("/register/:id", (req, res) =>
  Account.destroy({
    where: { id: req.params.id },
  })
    .then((accounts) => {
      console.log("deleted");
      res.send("deleted");
    })
    .catch((err) => console.log(err))
);

// update one user by ID
router.put("/register/:id", (req, res) =>
  Account.update(
    {
      // client_firstname: req.body.client_firstname,
      // client_lastname: req.body.client_lastname,
      client_email: req.body.client_email,
      // client_phonenumber: req.body.client_phonenumber,
      // client_address: req.body.client_address,
      // client_referralcode: req.body.client_referralcode,
      // client_password: req.body.client_password,
    },
    {
      where: { id: req.params.id },
    }
  )
    .then((accounts) => {
      console.log(accounts);
      res.send(accounts);
    })
    .catch((err) => console.log(err))
);

//create a new account
router.post("/register", jsonParser, async (req, res) => {
  encryptedPassword = await bcrypt.hash(req.body.client_password, 10);
  Account.create(
    {
      client_firstname: req.body.client_firstname,
      client_lastname: req.body.client_lastname,
      client_email: req.body.client_email,
      client_phonenumber: req.body.client_phonenumber,
      client_address: req.body.client_address,
      client_referralcode: req.body.client_referralcode,
      client_password: encryptedPassword,
    }
  )
    .then((accounts) => {
      console.log(accounts);
      res.send(accounts);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
