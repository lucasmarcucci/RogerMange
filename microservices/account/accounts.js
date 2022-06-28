const express = require("express");

//database mysql
const db = require("./config/database");

//test database connection
try {
  db.authenticate();
  console.log("Connecté à la base de données MySQL!");
} catch (error) {
  console.error("Impossible de se connecter, erreur suivante :", error);
}

const app = express();
app.use(require('./routes/routes'));
const port = 3000; //setup port
app.use(express.json());


// PORT
app.listen(port, () => {
  console.log(`Up and Running on port ${port} - This is Account service`);
});
