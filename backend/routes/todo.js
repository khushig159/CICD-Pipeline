const express=require('express')
const router=express.Router()

let todos=[
    {id:1, task:"Learn Mern properly", completed:false}
];

router.get('/',(req,res)=>{
    res.json(todos)
})

router.post('/',(req,res)=>{
    const newTodo={
        id:todos.length+1,
        task:req.body.task,
        completed:false
    };
    todos.push(newTodo)
    res.json(newTodo)
})

module.exports=router;