// import React, { useState } from "react";
// import { render } from "react-dom";
import React,{useState} from 'react';
import './App.css';

 function Todo(props) {
  
    return(
        <div 
            className='todo'
            style={{textDecoration:props.todo.isCompleted?"line-through":""}}
        >
            {props.todo.text}
            <div>
                <button onClick={()=>props.completeTodo(props.index)}>Complete</button>
            </div>
            <div>
                <button onClick={()=>props.removeTodo(props.index)}>x</button>
            </div>    
            
        </div>
        //

    )
    
}

function Todoform({addTodo}) {
    const[value,setValue]=useState('');
    const handleSubmit=e=>{
        e.preventDefault();
        if(!value) return;
        addTodo(value);
        setValue('');
    };
    return(
        <form  onSubmit={handleSubmit}>
            <input
            type='text'
            className='input'
            value={value}
            onChange={e=>setValue(e.target.value)}
            />
        </form>
    )
    
}

function App() {
    const[todos,setTodos]=useState([
        {text:'Learn React hooks', isCompleted: false},
        {text:'Make it cool',isCompleted: false},
        {text:'Show hayden',isCompleted: true}
    ]);
    
    const addTodo=text=>{
        const newTodos=[...todos,{text}];//merging this both array+{text} ek aur element
        setTodos(newTodos);
 
    }

    const completeTodo=(index)=>{
        const newTodos=[...todos]
        newTodos[index].isCompleted=true
        setTodos(newTodos)
    }

    const removeTodo=index=>{
        const newTodos=[...todos]
        newTodos.splice(index,1)
        setTodos(newTodos)

    }


    return(
        <div className="app">
            <div className="todo-list">
                {todos.map((todo,index)=>(
                    <Todo
                    key={index}
                    index={index}
                    todo={todo}
                    completeTodo={completeTodo}
                    removeTodo={removeTodo}
                    />
                ))}
                <Todoform addTodo={addTodo} />
            </div>
        </div>
    )    
}
export default App;