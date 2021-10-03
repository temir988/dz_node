const { json } = require("express");
const requestId = require("./requestId");

module.exports = (app) => {
  app.use(json());

  app.use((req, res, next) => {
    res.removeHeader("X-Powered-By");

    next();
  });

  app.use(requestId);
};
