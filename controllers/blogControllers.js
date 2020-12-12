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
  let data = blogsData.find((blog) => {
    return blog.id == req.params.id;
  });
  if (data) {
    res.status(200).json({
      message: "Successful",
      data: data,
    });
  } else {
    res.status(404).json({
      message: "Unsuccessful",
    });
  }
};

module.exports = {
  getAllBlogs,
  getBlogById,
};
