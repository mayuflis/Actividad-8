const express = require("express");
const cors = require("cors");
const { infoLogger } = require("./helpers/logger");

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  infoLogger.info(`[Method]: ${req.method} [Url]: ${req.url}`);
  next();
});

app.use("/api", require("./routes/api"));

module.exports = app;
