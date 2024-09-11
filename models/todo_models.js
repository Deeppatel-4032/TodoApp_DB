
const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    compile : {
        type : Boolean
    },
    path : {
        type : String
    }
})

const TodoModel = mongoose.model("Todos", todoSchema);

module.exports = TodoModel;

