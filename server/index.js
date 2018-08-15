const express = require("express");
const { json } = require("body-parser");
const port = 3000;

const app = express();

app.use(json());

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
