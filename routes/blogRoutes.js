const express = require("express");
const blogRoute = express.Router();

blogRoute.route("/").get((req, res) => {
  console.log("Route /blogs/ reached");
  res.send("End of request");
});

module.exports = blogRoute;
