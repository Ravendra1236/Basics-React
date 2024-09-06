import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
function TodoList() {

    let [todos , setTodos] = useState([{task : "Coding" , id :uuidv4() , isDone : false}])
    let [newTodo , setNewTodo] = useState("")

    let addNewTask = ()=>{
        setTodos((prevTodos)=>{
            return [...prevTodos , {task : newTodo , id : uuidv4() , isDone : false}]
        })
        setNewTodo("")
    }   
    let updateTodo = (event)=>{
        setNewTodo(event.target.value)              
    }  
    // If we want to delete something then we follow this filter pattern and want to add somehting we will use map pattern
    let deleteTask = (id)=>{
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id))
        
    }

    let toUpperCase = ()=>{
        setTodos((prevTodos)=>{
            return prevTodos.map((todo)=>{
            return {...todo, task : todo.task.toUpperCase()}         
        })
        })
    }
    let toUpperCaseOne = (id)=>{
        setTodos((prevTodos) => {
            return prevTodos.map((todo)=>{
                if(todo.id == id){
                    return {
                        ...todo,
                        task : todo.task.toUpperCase()
                    }
                }else{
                    return todo ;
                }
            })
        })
    }
    let toLowerCase = ()=>{
        setTodos((prevTodos)=>{
            return prevTodos.map((todo)=>{
            return {...todo, task : todo.task.toLowerCase()}         
        })
        })
    }
    let markedDone = (id)=>{
        setTodos((prevTodos) => {
            return prevTodos.map((todo)=>{
                if(todo.id == id){
                    return {
                        ...todo,
                        isDone : true
                    }
                }else{
                    return todo ;
                }
            })
        })
    }
    let allDone = ()=>{
        setTodos((prevTodos) => {
            return prevTodos.map((todo)=>{          
                    return {
                        ...todo,
                        isDone : true
        }})
        })
    }
    return (
    <div>
        <h2>ToDo List</h2>

        <input type="text" placeholder="Tasks to do..." value={newTodo}  onChange={updateTodo}/>
        <br /><br />
        <button onClick={addNewTask}>Add</button>
        <br /><br />
        <hr />
        <h3>Task to Complete</h3>
        <ul>
            {
                todos.map((todo) => (
                <li key={todo.id}>
                    <span style={todo.isDone ? {textDecoration : "line-through"}: {}}>{todo.task}</span>
                    <button onClick={()=>deleteTask(todo.id)}>Delete</button>
                    <button onClick={()=>toUpperCaseOne(todo.id)}>Upper Case</button>
                    <button onClick={()=>markedDone(todo.id)}>Done</button>
                </li>
                ))
            }
        </ul>
        <br /><br />
        <button onClick={toUpperCase}>Upper Case</button>
        <br /><br />
        <button onClick={toLowerCase}>Lower Case</button>
        <br /><br />
        <button onClick={allDone}>All Done</button>
    </div>
    ) 
}

export default TodoList
