const path = require("path");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

const rootDir = require("./utils/pathUtils");
const router = require("./router/homeRouter");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(router);
app.use(express.static(path.join(rootDir, "public")));

const PORT = 3000;
const DB_PATH =
  "mongodb+srv://arunrawat:Arunrawat@cluster0.tuvyuvj.mongodb.net/mydatabase?retryWrites=true&w=majority";

mongoose
  .connect(DB_PATH)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on address http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error while connecting to Mongo: ", err);
  });
