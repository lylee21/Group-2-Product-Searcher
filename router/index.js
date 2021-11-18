const express = require("express");
const app = express();

app.use(express.json());
const generalRoutes = require("./general.router");

app.use(generalRoutes);

app.listen(3000, () => {
  console.log("Listening to port 3000...");
});
