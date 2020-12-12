const fs = require("fs");
const path = require("path");
const fileName = path.join(__dirname, "..", "data", "blogs.json");
const blogsData = JSON.parse(fs.readFileSync(fileName, "utf-8"));
const sendResponse = require("../helpers/sendResponse");
const sendError = require("../helpers/sendError");
const AppError = require("../helpers/appErrorClass");

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
      res
    );
  } else {
    sendError(
      new AppError(404, "Request was Unsuccessful", "No Blogs were found"),
      res
    );
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
      res
    );
  } else {
    sendError(
      new AppError(
        404,
        "Request was Unsuccessful",
        `Blog with Id ${req.params.id} does not exist.`
      ),
      res
    );
  }
};

module.exports = {
  getAllBlogs,
  getBlogById,
};
