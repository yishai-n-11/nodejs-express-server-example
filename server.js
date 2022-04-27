const express = require("express");
const app = express();
const PORT = 5454;
const fs = require("fs");
const path = require("path");
const allTaskRouter = require("./routes/allTasks.route");
const taskRouter = require("./routes/task.route");
const middlewares = require("./middleware/middleware.module");
const cors = require("cors");
app.use(express.json());
app.use(middlewares.logger.logTime);
app.use(middlewares.logger.logReqDetails);
app.listen(PORT, () => {
  console.log("server listening on port ", PORT);
});

app.use("/allTasks", allTaskRouter);
app.use("/task", taskRouter);
