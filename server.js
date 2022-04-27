const express = require("express");
const app = express();
const PORT = 5454;
const fs = require("fs");
const path = require("path");

app.listen(PORT, () => {
  console.log("server listening on port ", PORT);
});
