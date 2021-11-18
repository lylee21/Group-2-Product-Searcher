const express = require("express");
const app = express();

app.use(express.json()); 
const generalRoutes = require("./general.router");

app.use(generalRoutes);

module.exports = app;