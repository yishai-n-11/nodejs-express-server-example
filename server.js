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
app.get("/task/:id", (req, res) => {
  const id = req.params.id;
  const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
  if (data.length > parseInt(id)) {
    res.send(data[id]);
  } else {
    res.end("no such task with id", id);
  }
});
app.delete("/task/:id", (req, res) => {
  const id = req.params.id;
  const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
  const intId = parseInt(id);
  if (data.length > intId) {
    const taskToDel = data[intId];
    data.splice(intId, 1);
    res.send(`deleted: ${JSON.stringify(taskToDel)}`);
  } else {
    res.end("no such task with id", id);
  }
});
