const express=require('express')
const todoRouter=require('./routes/todo')
const app=express()
const cors=require('cors')

app.use(express.json())
app.use(cors('*'))

app.use('/api/todos',todoRouter)

app.listen(5000,()=>{
    console.log('App listening on port 5000')
})