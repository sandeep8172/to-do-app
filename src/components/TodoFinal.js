import "./TodoFinal.css";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";


const TodoFinal = (props) => {
    const getInputData = (enteredData) => {
        props.items(enteredData);
    }
    const getDueDate = (dueDate) => {
    }


    return (
        <ul className="outer-box">
            <TodoInput onGetData={getInputData} onDueDate={getDueDate} />
            <div className="desc-box">Todo List</div>
            {props.todoDAta.map(todo => (
                <TodoList desc={todo.desc} date={todo.date} id={todo.id} key={todo.id} onDelete={props.onDeleteTodo} />)
            )}
        </ul>
    )
}
export default TodoFinal;