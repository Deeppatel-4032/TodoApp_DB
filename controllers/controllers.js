const todomodel = require("../models/todo_models.js");
const fs = require("fs");

const defaultCon = async (req, res) => {

    const data =  await todomodel.find({});

    console.log("Data", data);
    await res.render("index.ejs", { todos : data });
}

const todoCon = async (req, res) => {
    console.log(req.body, req.file);

    const data = {
        title : req.body.todoList,
        path : req.file.path,
        compile : false
    }
    console.log("data", data);
    

    const todoModelObj = new todomodel(data);
    await todoModelObj.save();
    console.log("todom", todoModelObj);

    
    res.redirect("/");
}

const editCon = async (req, res) => {

    const {id}= req.params; 
    console.log("editeID", id);

    const editeData = await todomodel.findOne({ _id: id });

    console.log("editeData", editeData);

    res.render("edite_todo", { editeData });
}

const updateCon = async (req, res) => {
    
    const {id} = req.body;

  const update = await todomodel.findById(id)
  console.log("update", update);

  fs.unlink(update.path, (err) => {
    if(!err)
        console.log("delete file");   
    });
    update.title = req.body.title;

   if(req.file) {
        update.path = req.file.path
   }
   


    const updateData = await todomodel.findByIdAndUpdate(
        {_id : id}, update, {new : true}
    );

    console.log("updateTodo", updateData);
        
    res.redirect("/");
}

const deleteCon = async (req, res) => {

    const {id} = req.params;
    console.log("DeleteID", id);
    
const deleteData = await todomodel.findByIdAndDelete(req.params.id);

    console.log("deleteData", deleteData);

    res.redirect("/");
}

module.exports = { defaultCon, todoCon, editCon, updateCon, deleteCon }