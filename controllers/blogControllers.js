const fs = require("fs");
const path = require("path");
const fileName = path.join(__dirname, "..", "data", "blogs.json");
const blogsData = JSON.parse(fs.readFileSync(fileName, "utf-8"));

const getAllBlogs = (req, res, next) => {
  res.status(200).json({
    message: "Request for getting the Blogs Successful",
    data: blogsData,
  });
};

const getBlogById = (req, res, next) => {
  console.log(req.params);
  res.send("Get Blog by Id request added");
};

module.exports = {
  getAllBlogs,
  getBlogById,
};
