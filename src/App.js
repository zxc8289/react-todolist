import React, { useEffect, useMemo, useRef, useState } from "react";
import Child1 from "./compnents/Child1";
import Child2 from "./compnents/Child2";

const App = () => {
  // const [count, setCount] = useState(0);

  // const increase = () => {
  //   setCount((prev) => prev + 1);
  // };

  const [todoList, setTodoList] = useState([]);

  const addTodo = (todo) => {
    const tempTodoList = [...todoList];
    tempTodoList.push(todo);
    setTodoList(tempTodoList);
  };

  const deleteTodo = (index) => {
    const tempTodoList = [...todoList];
    tempTodoList.splice(index, 1);
    setTodoList(tempTodoList);
  };

  return (
    <div>
      <h1>부모</h1>
      <hr />
      <Child1 setData={addTodo} data={todoList} />
      <Child2 data={todoList} deleteData={deleteTodo}></Child2>
    </div>
  );
};

export default App;
