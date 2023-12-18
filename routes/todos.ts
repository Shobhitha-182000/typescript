import { Router } from "express";
import { Todo } from "../models/todos";

let todos:Todo[] = [];
const router = Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({todos:todos});
})

router.post('/todo',(req,res,next)=>{
     const newTodo :Todo={
        id:new Date().toISOString(),
        name:req.body.name
     };
     todos.push(newTodo);
     res.status(201).json({message:'inserted',todo:newTodo,todos:todos})
})

router.put('/todo/:todoId',(req,res,next)=>{
    const tid=req.params.todoId;
    const index=todos.findIndex(todosItem=>todosItem.id==tid);
    if(index>=0){
        todos[index]={id:todos[index].id,name:req.body.name}
        return  res.status(200).json({message:'updated',todos:todos})
    }
    res.status(404).json({message:'Couldnot found any id'})
})

router.delete('/todo/:todoId',(req,res,next)=>{
    todos=todos.filter(todosItem=>todosItem.id!=req.params.todoId);
    res.status(200).json({message:'Deleted',todos:todos})
    
})

export default router;
