import TodoFinal from './components/TodoFinal';
import React, { useState } from 'react';

function App() {
  const dummyArray = [
    { desc: "buy some mangoes", date: new Date(2023, 11, 31), id: "1t" },
    { desc: "rent a car", date: new Date(2022, 1, 15), id: "2t" },
    { desc: "get new shoes", date: new Date(2023, 2, 1), id: "3t" }
  ];
  const [todo, setTodo] = useState(dummyArray);
  const todoHandler = (todoInputData) => {
    setTodo((preState) => {
      return [todoInputData, ...preState];
    })
  }
  const deleteTodoHandler = (todoId) => {
    setTodo((preState) => {
      const updatedTodo = preState.filter((todo) => todo.id !== todoId)
      return updatedTodo;
    })
  }

  return (
    <div>
      <TodoFinal items={todoHandler} todoDAta={todo} onDeleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;
