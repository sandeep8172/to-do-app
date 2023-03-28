import "./TodoInput.css";
import React, { useState } from "react";
const TodoInput = (props) => {
    const [inputValue, setInputValue] = useState("");
    const [inputDate, setInputDate] = useState("");

    const inputTextHandler = (event) => {
        setInputValue(event.target.value);
    }
    const inputDateHandler = (event) => {
        setInputDate(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault();
        if (inputValue.trim().length === 0) {
            return window.alert("please input todo first")
        } else if (inputDate === "") {
            return alert("please input date first");
        }
        const inputData = {
            desc: inputValue,
            date: new Date(inputDate),
            id: Math.random().toString()
        }
        props.onGetData(inputData);
        setInputValue("");
        setInputDate("");
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="main-div">
                <input className="input-box" type={"text"} onChange={inputTextHandler} value={inputValue} placeholder={"What need to be done?"} />
                <input type={"date"} className="date-box" onChange={inputDateHandler} value={inputDate} />
                <button className="submit-button" type="submit">Add</button>
            </div>
        </form>
    )
}

export default TodoInput;