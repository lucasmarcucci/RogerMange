const express = require("express");
const mysql = require("mysql");
const app = express();
app.use(express.json());
require("dotenv").config();

//database mysql
const db = require("./config/database");
const Account = require("./Account");

//test database connection
try {
  db.authenticate();
  console.log("Connecté à la base de données MySQL!");
} catch (error) {
  console.error("Impossible de se connecter, erreur suivante :", error);
}

//get all users
app.get("/register", (req, res) =>
  Account.findAll()
    .then((accounts) => {
      console.log(accounts);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err))
);

//get one user by ID
app.get("/register/:id", (req, res) =>
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
app.delete("/register/:id", (req, res) =>
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
app.put("/register/:id", (req, res) =>
  Account.update(
    {
      client_firstname: req.body.client_firstname,
      client_lastname: req.body.client_lastname,
      client_email: req.body.client_email,
      client_phonenumber: req.body.client_phonenumber,
      client_address: req.body.client_address,
      client_referralcode: req.body.client_referralcode,
      client_password: req.body.client_password,
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

//connection to database without sequelize
const database = mysql.createConnection({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  multipleStatements: true,
});

//create a new account
app.post("/register", (req, res) => {
  var client_firstname = req.body.client_firstname;
  var client_lastname = req.body.client_lastname;
  var client_email = req.body.client_email;
  var client_phonenumber = req.body.client_phonenumber;
  var client_address = req.body.client_address;
  var client_referralcode = req.body.client_referralcode;
  var client_password = req.body.client_password;

  var query = `
    INSERT INTO accounts 
    (client_firstname, client_lastname, client_email, client_phonenumber, client_address, client_referralcode, client_password)
    VALUES ("${client_firstname}", "${client_lastname}", "${client_email}", "${client_phonenumber}", "${client_address}", "${client_referralcode}", "${client_password}")
    `;

  database.query(query, function (error, results) {
    if (error) {
      res.status(404).send("Can't create user");
    }
    res.status(200).send("User created");
  });
});

//setup port
const port = 3000;
// PORT
app.listen(port, () => {
  console.log(`Up and Running on port ${port} - This is Account service`);
});
