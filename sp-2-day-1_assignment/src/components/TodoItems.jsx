export const TodoItem = ({ todo, handleStatus }) => {
    return (
        <div>
            {todo.title} - {todo.status ? "Done" : "Pending"} - {todo.id} <button onClick={() => handleStatus(todo.id)}>Tag</button>
        </div>


    )
}