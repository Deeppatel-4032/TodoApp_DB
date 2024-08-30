
const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    compile : {
        type : Boolean
    }
})

const TodoModel = mongoose.model("Todos", todoSchema);

module.exports = TodoModel;

