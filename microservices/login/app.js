// require("dotenv").config();
// require("./config/database").connect();
const express = require("express");
const User = require("./model/User");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
// const cookieParser = require('cookie-parser')

const app = express();

app.use(express.json());
// app.use(cookieParser());

module.exports = app;

// const port = process.env.PORT;
const port = 3011;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });


  app.post("/login", async (req, res) => {

    const email = req.body.client_email;
    const password = req.body.client_password

    console.log(email, password)
  
    const user = await User.findOne({
        where: { client_email: email },
    })

    if(user && (await bcrypt.compare(password, user.toJSON().client_password))) {
        const token = jwt.sign(
            { user_id: user.toJSON().id, email },
            "my_key",
            //process.env.TOKEN_KEY,
            {
                expiresIn: "2h",
            }
        );
        // res.cookie("token", token);
        // console.log(token)
        res.send(token);
    } else {
        res.status(400).send("Invalid Credentials");
    }
  });

  app.post("/logout", async (req, res) => {
    res.clearCookie("token");
    res.send("Successfully disconnected")
  });

  // Login
  app.post("/login", async (req, res) => {
  
    
  });

  const auth = require("./middleware/auth");

app.get("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});

