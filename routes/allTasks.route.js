const express = require("express");
const router = express.Router();
const dataPath = __dirname + "/../data/tasks.json";
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "DELETE"],
};

const corsPreflightOp = {
  origin: "*",
  methods: ["PUT"],
};

router.use(cors(corsOptions));
router.options("/", cors(corsPreflightOp));
router.get("/", (req, res) => {
  const data = fs.createReadStream(path.join(dataPath), "utf-8");
  data.pipe(res);
});
router.delete("/", (req, res) => {
  fs.writeFileSync(dataPath, "[]");
  res.send("deleted");
});

module.exports = router;
