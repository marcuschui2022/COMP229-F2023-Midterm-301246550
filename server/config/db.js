require("dotenv").config();
module.exports = {
  //local MongoDB deployment ->
  // "URI": "mongodb://localhost/books229"
  URI: process.env.MongoConnectionString,
};
