const todomodel = require("../models/todo_models.js")

const defaultCon = async (req, res) => {

    const data =  await todomodel.find({});

    console.log("Data", data);
    await res.render("index.ejs", { todos : data });
}

const todoCon = async (req, res) => {
    // console.log(req.body);

    const data = {
        title : req.body.todoList,
        compile : false,
    }

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

    const updateData = await todomodel.findByIdAndUpdate({_id : id},  {title : req.body.title}, {new : true});

    console.log("updateTodo", updateData);
        
    res.redirect("/");
}

const deleteCon = async (req, res) => {

    const {id} = req.body;
    console.log("DeleteID", id);
    
const deleteData = await todomodel.findByIdAndDelete(req.params.id);

    console.log("deleteData", deleteData);

    res.redirect("/");
}

module.exports = { defaultCon, todoCon, editCon, updateCon, deleteCon }