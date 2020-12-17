const fs = require("fs");
const path = require("path");
const fileName = path.join(__dirname, "..", "data", "blogs.json");
const blogsData = JSON.parse(fs.readFileSync(fileName, "utf-8"));
const sendResponse = require("../helpers/sendResponse");
const sendError = require("../helpers/sendError");
const AppError = require("../helpers/appErrorClass");

const getAllBlogs = (req, res, next) => {
  let data = blogsData.filter((blog) => {
    if (req.query.author) {
      let blogAuthor = blog.author.toLowerCase().split("  ");
      let authorName = req.query.author.toLowerCase().trim().split(" ");
      let result;
      if (
        (blogAuthor[0] == authorName[0] && blogAuthor[1] == authorName[1]) ||
        (blogAuthor[0] == authorName[1] && blogAuthor[1] == authorName[0])
      ) {
        result = true;
      } else if (
        (blogAuthor[0] == authorName[0] && authorName[1] == undefined) ||
        (blogAuthor[1] == authorName[0] && authorName[1] == undefined)
      ) {
        result = true;
      }
      if (result == true) req.query.author = blog.author;
    }
    return Object.keys(req.query).every((param) => {
      return blog[param] == req.query[param];
    });
  });
  if (data.length == blogsData.length) {
    sendResponse(
      200,
      "Request for getting all the Blogs was Successful.",
      data,
      res
    );
  } else if (data.length !== 0) {
    sendResponse(
      200,
      "Request for getting the Blogs with Query Parameter was Successful.",
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
