const todomodel = require("../models/todo_models.js")
let storageTodo = [];

const defaultCon = (req, res) => {
    res.render("index.ejs", { todos : storageTodo });
}

const todoCon = async (req, res) => {
    console.log(req.body);

    const data = {
        title : req.body.todoList,
        compile : false,
    }

    const todoModelObj = new todomodel(data);
    await todoModelObj.save();
    console.log("todom", todoModelObj);

    
    res.redirect("/");
}

const editCon = (req, res) => {

    const{id} = req.params;
    console.log("editeID", id);

    const editSingleRecod =  storageTodo.find((editId) => {
        return editId.id == id;
    })
    res.render("edite_todo", { editSingleRecod });
    console.log("editSingleRecod", editSingleRecod);
}

const updateCon = (req, res) => {
    
    const {id} = req.body;
    console.log("updateID",id);

    const updateTodo = storageTodo.find((upId) => {
        return upId.id == id;
    })
    updateTodo.todoList = req.body.todoList;
    console.log("updateTodo", updateTodo);
        
    res.redirect("/");
}

const deleteCon = (req, res) => {

    const {id} = req.body;
    console.log("DeleteID", id);
    
    const deletItem = storageTodo.filter((delId) => {
        return delId.id != id;
    })
    storageTodo = deletItem;
    console.log("storageTodo", storageTodo);

    res.redirect("/");
}

module.exports = { defaultCon, todoCon, editCon, updateCon, deleteCon }