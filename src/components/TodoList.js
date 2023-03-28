import "./TodoList.css";
import React, { useState } from "react";

// let textClass = "text-desc";
const TodoList = (props) => {

    const [isChecked, setIsChecked] = useState(false);

    const day = props.date.toLocaleString("en-US", { day: "2-digit" });
    const month = props.date.toLocaleString("en-US", { month: "long" });
    const year = props.date.getFullYear();

    const currentDate = new Date();
    let dueText = "";
    let classes = "main-box";

    if (props.date < currentDate) {
        dueText = <p className="due-date">Due date is passed</p>;
        classes = "due-border";
    }
    const deleteHandler = () => {
        props.onDelete(props.id)
    }

    const checkBoxHandler = (event) => {
        setIsChecked(prevState => !prevState)
    }
    return (
        < div className={classes} >
            <div className="list">
                <input type={"checkbox"} value={isChecked} onChange={checkBoxHandler} className="check-box" />
                <p className={!isChecked ? "text-desc" : "checked-desc"} >{props.desc}</p>
                <div className="date">
                    <div className="todo-day">{day}</div>
                    <div className="todo-month">{month}</div>
                    <div className="todo-year">{year}</div>
                </div>
                <button className="delete" type="delete" onClick={deleteHandler}>Delete</button>
            </div >
            {dueText}
        </div >
    );
};
export default TodoList;

var str = "Digikull";
let output = ""
for (let i = str.length - 1; i >= 0; i--) {
    output += str[i]
}