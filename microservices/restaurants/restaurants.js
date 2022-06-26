const express = require("express");

// Connect
require("./mongo-init");

const app  = express();
app.use(require('./routes/routes'));
const port = 3020;
app.use(express.json());


// PORT
app.listen(port, () => {
  console.log(`Up and Running on port ${port} - This is Restaurant service`);
});
