const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const fs = require("fs");
const path = require("path");
const fileName = path.join(__dirname, "data", "blogs.json");
const blogsData = JSON.parse(fs.readFileSync(fileName, "utf-8"));

app.listen(process.env.PORT, () => {
  console.log(`Server has started at PORT ${process.env.PORT}`);
});
