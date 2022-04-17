import axios from 'axios';
import  { useState, useEffect } from 'react';
import './Todo.css';


function Task({ task, index, completeTask, removeTask }) {
    return (
        <div
            className="task"
            id={ task.completed ? "completed" : "" }
        >
            {task.title}
           
            <button className="removeTask" style={{ background: "red" }} onClick={() => removeTask(index,task.id)}>X</button>
             <button onClick={() => completeTask(index)}>Complete</button>
          

        </div>
    );
}

function CreateTask({ addTask }) {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        const payload = {
            title: value,
            completed:false
        }
        axios.post("http://localhost:8080/todos", payload)
        

        // e.preventDefault();
        if (!value) return;
        addTask(value);
        setValue("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                placeholder="Add a new task"
                onChange={e => setValue(e.target.value)}
            />
           
        </form>
    );
}

function Todo() {
    const [tasksRemain, setTasksRemain] = useState(0);
    const [tasks, setTasks] = useState([]);
    const [page, setPage] = useState(0);


   
     useEffect(() => {
         async function getTodo() {
           
             const response = await fetch(`http://localhost:8080/todos?_page=${page}&_limit=4`); 
             const data = await response.json()
               console.log(data)
                  setTasks(data)

         }
          getTodo()
     }, [page]);
   

    useEffect(() => {
        setTasksRemain(tasks.filter(task => !task.completed).length)
    });


    const addTask = title => {
        const newTasks = [...tasks, { title, completed: false }];
        setTasks(newTasks);
    };

    const completeTask = index => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    };

    const removeTask = (index,id) => {
     
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        axios.delete(`http://localhost:8080/todos/${id}`)
        setTasks(newTasks);
    };

    return (
        <div className="todo-container">
            <div className="header">Pending Tasks ({tasksRemain})</div>
            <div className="create-task" >
                <CreateTask addTask={addTask} />
            </div>
            <div className="tasks">
                {tasks.map((task, index) => (
                    <Task
                    task={task}
                    index={index}
                    completeTask={completeTask}
                    removeTask={removeTask}
                    key={index}
                    />
                ))}
            </div>
            <div className='paginate'>
                <button onClick={()=>setPage(page-1)}>Prev</button>
           <button onClick={()=>setPage(page+1)}>Next</button>
            </div>
            
        </div>
    );
}

export default Todo ;