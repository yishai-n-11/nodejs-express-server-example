const express = require("express");
const router = express.Router();
const dataPath = __dirname + "/../data/tasks.json";
const fs = require("fs");
const path = require("path");

router.get("/:id", (req, res) => {
  const id = req.params.id;
  console.log("id", id);
  const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
  if (data.length > parseInt(id)) {
    res.send(data[id]);
  } else {
    res.end(`no such task with id ${1}`);
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
module.exports = router;
