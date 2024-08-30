const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/myTodos')
  .then(() => console.log('DB is Connected.....!'))
  .catch((err) =>{
    console.log("connected is failed...!", err)
  });
