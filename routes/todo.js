const router = require("express").Router()
const Todo = require("../models/Todo");

// routes
router.post("/add/todo", (req, res) => {
    const {todo} = req.body;
    const newTodo = new Todo({todo})

    // Save the todo
    newTodo.save()
    .then(()=>{
        console.log("Sucessfully! add todo.")
        res.redirect("/")
    })
    .catch((err) => console.log(err)) 
});

router.get("/delete/todo/:_id", (req, res) => {
    const {_id} = req.params;
    Todo.deleteOne({_id})
    .then(() => {
        console.log("Sucessfully deleted...")
        res.redirect("/")
    })
    .catch((err) => console.log(err))
})

module.exports = router