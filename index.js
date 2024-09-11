const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const path = require("path");
const routes = require("./routes/index.js");
const PORT = process.env.PORT || 3003;
const Path = path.join(__dirname,"/views");
const bodyParser = require("body-parser");
const db = require('./db/db_file.js');

app.set("view engine", "ejs");
app.set("views", Path);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(Path)); 
app.use("/public", express.static(path.join(__dirname,"/public")));
app.use("/", routes);

app.listen(PORT, (err)=> {
    if(!err) {
        console.log(`Server is running on http://localhost:${PORT}`);
    }
});