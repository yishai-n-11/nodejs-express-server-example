const express = require("express");
const app = express();
const PORT = 5454;
const fs = require("fs");
const path = require("path");
const dataPath = __dirname + "/./data/tasks.json";
const allTaskRouter = require("./routes/allTasks.routes");
const taskRouter = require("./routes/tasks.routes");

app.listen(PORT, () => {
  console.log("server listening on port ", PORT);
});

const allTaskRouter = require("./routes/allTasks.routes");
const taskRouter = require("./routes/tasks.routes");
