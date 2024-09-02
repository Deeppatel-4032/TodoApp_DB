const mongoose = require("mongoose");

mongoose.connect(`${process.env.MONGODB_URL}`)
  .then(() => console.log('DB is Connected.....!'))
  .catch((err) =>{
    console.log("connected is failed...!", err)
  });
