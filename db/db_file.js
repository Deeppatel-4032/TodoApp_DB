const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/myTodos")
  .then(() => console.log('DB is Connected.....!'))
  .catch((err) =>{
    console.log("connected is failed...!", err)
  });
