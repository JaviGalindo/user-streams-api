const express = require("express");
const app = express();
const streamsService = require("./services/streams");

app.use("/streams", streamsService);

module.exports = app;