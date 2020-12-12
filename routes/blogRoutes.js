const express = require("express");
const blogRoute = express.Router();
const { getAllBlogs, getBlogById } = require("../controllers/blogControllers");

blogRoute.route("/").get(getAllBlogs);

blogRoute.route("/:id").get(getBlogById);

module.exports = blogRoute;
