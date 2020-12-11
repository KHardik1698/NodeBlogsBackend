const express = require("express");
const blogRoute = express.Router();
const { getAllBlogs } = require("../controllers/blogControllers");

blogRoute.route("/").get(getAllBlogs);

module.exports = blogRoute;
