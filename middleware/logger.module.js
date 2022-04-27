function logTime(req, res, next) {
  console.log("got req in: ", new Date());
  next();
}

function logReqDetails(req, res, next) {
  console.log(`got url: ${req.url}, with method: ${req.method}`);
  next();
}

module.exports = { logTime, logReqDetails };
