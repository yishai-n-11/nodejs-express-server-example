const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const dataPath = path.join(__dirname + "/../data/tasks.json");
router.use(express.json());

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
  if (data.length > parseInt(id)) {
    res.send(data[id]);
  } else {
    res.end(`no such task with id ${id}`);
  }
});
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
  if (data.length > parseInt(id)) {
    res.send(data[id]);
  } else {
    res.end("no such task with id", id);
  }
});
router.post("/add", (req, res) => {
  const task = req.body;
  const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
  data.push(task);
  fs.writeFileSync(dataPath, JSON.stringify(data));
  res.send("task added");
});
module.exports = router;
