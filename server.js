const express = require("express");
const app = express();
const PORT = 5454;
const fs = require("fs");
const path = require("path");
const dataPath = __dirname + "/./data/tasks.json";

app.listen(PORT, () => {
  console.log("server listening on port ", PORT);
});

app.get("/allTasks", (req, res) => {
  const data = fs.createReadStream(path.join(dataPath), "utf-8");
  data.pipe(res);
});
app.delete("/allTasks", (req, res) => {
  fs.writeFileSync(dataPath, "[]");
  res.send("deleted");
});
