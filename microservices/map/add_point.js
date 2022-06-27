const express = require("express");

const app  = express();
app.use(express.static('public'));
app.use(require('./routes/routes'));
const port = 3040;
app.use(express.json());

// PORT
app.listen(port, () => {
    console.log(`Up and Running on port ${port} - This is Map service`);
  });  