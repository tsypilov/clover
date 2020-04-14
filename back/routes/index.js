const news = require("./news.js");

module.exports = function (app, db) {
  news(app, db);
};
