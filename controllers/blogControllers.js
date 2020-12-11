const fs = require("fs");
const path = require("path");
const fileName = path.join(__dirname, "..", "data", "blogs.json");
const blogsData = JSON.parse(fs.readFileSync(fileName, "utf-8"));

const getAllBlogs = (req, res, next) => {
  console.log("Route /blogs/ reached");
  res.send("End of request");
};

module.exports = {
  getAllBlogs,
};
