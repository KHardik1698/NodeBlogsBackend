const fs = require("fs");
const path = require("path");
const fileName = path.join(__dirname, "..", "data", "blogs.json");
const blogsData = JSON.parse(fs.readFileSync(fileName, "utf-8"));
const sendResponse = require("../helpers/sendResponse");

const getAllBlogs = (req, res, next) => {
  let blogsPresent = false;
  let data = blogsData.filter((blog) => {
    blogsPresent = true;
    return blog;
  });
  if (blogsPresent) {
    sendResponse(
      200,
      "Request for getting all the Blogs was Successful.",
      data,
      req,
      res
    );
  } else {
    res.status(404).json({
      message: "Request was Unsuccessful, no Blogs were found.",
    });
  }
};

const getBlogById = (req, res, next) => {
  let data = blogsData.find((blog) => {
    return blog.id == req.params.id;
  });
  if (data) {
    sendResponse(
      200,
      `Request for getting the Blog with Id ${req.params.id} was Successful.`,
      data,
      req,
      res
    );
  } else {
    res.status(404).json({
      message: `Request was Unsuccessful, Blog with Id ${req.params.id} does not exist.`,
    });
  }
};

module.exports = {
  getAllBlogs,
  getBlogById,
};
