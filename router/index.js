const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

app.use(express.json());
const generalRoutes = require("./general.router");

app.use(generalRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Listening to port ${process.env.PORT}...`);
});
