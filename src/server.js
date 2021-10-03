const express = require("express");
const { PORT } = require("./config");
const { mainRouter } = require("./routers");
const setupMiddlewares = require("./middlewares");

const app = express();

// setup other
setupMiddlewares(app);

// main routes
app.use("/", mainRouter);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
