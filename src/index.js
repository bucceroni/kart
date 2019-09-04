const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();
const port = 5000;

app.use(cors())

app.use(routes)

app.listen(port, function () {
  console.log('Kart app listening on port 5000!');
});


