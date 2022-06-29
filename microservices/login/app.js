// require("dotenv").config();
// require("./config/database").connect();
const express = require("express");
const User = require("./model/User");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const app = express();

app.use(express.json());

// Logic goes here

module.exports = app;

// const port = process.env.PORT;
const port = 3011;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });


  app.post("/login", async (req, res) => {

    const { email, password } = req.body;
  
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
        console.log("===================   "+token)
        res.send(token);
        // return;
    } else {
        res.status(400).send("Invalid Credentials");
    }
  });

  // Login
  app.post("/login", async (req, res) => {
  
    
  });

  const auth = require("./middleware/auth");

app.get("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});

