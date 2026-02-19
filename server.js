const path = require('path');
const express = require('express');

const app = express();

const rootDir = require("./utils/pathUtils");
const router = require("./router/homeRouter");

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(router);
app.use(express.static(path.join(rootDir, "public")));

app.listen(3000, () => {
    console.log("server running on address http://localhost:3000");
});