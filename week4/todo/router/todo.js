const express = require("express");
const todoList = express.Router();
const { v4: uuidv4 } = require('uuid');


const tasks = [
    {
        name: "Gym",
        description : "Work chest , back , and selected auxillary muscles",
        imgUrl: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        completed: true,
        _id: uuidv4()
    },
    {
        name: "Fix Car",
        description : "Fix fuel pump and change oil",
        imgUrl: "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVjaGFuaWN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        completed: false,
        _id: uuidv4()
    },
    {
        name: "Kids",
        description : "Feed kids and put them to bed",
        imgUrl: "https://images.unsplash.com/photo-1628191010603-d82621898da2?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8a2lkc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        completed: true,
        _id: uuidv4()
    },
    {
        name: "Cut grass",
        description : "Landscape yard",
        imgUrl: "https://images.unsplash.com/photo-1588776203307-455958677384?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y3V0JTIwZ3Jhc3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        completed: true,
        _id: uuidv4()
    },
]


//Get All 
todoList.route("/")
    .get((req, res) => {
    res.send(tasks)
    })

//Post 
    .post((req, res) => {
    const newTodo = req.body
    newTodo._id = uuidv4()
    tasks.push(newTodo)
    res.send(`You added ${newTodo.name} to your list!`)
});

//Get One 
todoList.get("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todo = req.body
    todo._id = uuidv4()
    const findToDo = tasks.find(todo => todo._id === todoId)
    res.send(findToDo)
})

//Delete 
todoList.delete("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todo = req.body
    todo._id = uuidv4()
    const todoIndex = tasks.findIndex(todo => todo._id === todoId)
    tasks.splice(todoIndex, 1)
    res.send(`Item deleted`)
})

//Update 
todoList.put("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todo = req.body
    todo._id = uuidv4()
    const todoIndex = tasks.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(tasks[todoIndex], req.body) 
    res.send(updatedTodo)
})


module.exports = todoList