import { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItems";
import { nanoid } from "nanoid"

function Todo() {

    const [todoList, setTodoList] = useState([])

    const getData = (todo) => {
        const payload = {
            title: todo,
            status: false,
            id: nanoid(5),
        }
        setTodoList([...todoList, payload]);
    };

    const handleStatus = (id) => {
        setTodoList([
            ...todoList.map((e) => (e.id === id ? { ...e, status: !e.status } : e)),
        ]);
    };

    return (
        <div>
            <TodoInput getData={getData} />
            {todoList.map((e) => (
                <TodoItem handleStatus={handleStatus} todo={e}></TodoItem>
            ))}
        </div>
    )
}

export { Todo }