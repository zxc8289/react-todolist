import React, { useEffect, useMemo, useRef, useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";

const Child1 = ({ setData, data }) => {
  const todoRef = useRef();

  const enterInsert = (e) => {
    if (e.key === "Enter") {
      insertTodo();
    }
  };

  const insertTodo = () => {
    // 1. useRef

    if (todoRef.current.value == "") {
      alert("공백입니다.");
      todoRef.current.value = "";
      todoRef.current.focus();
    }

    if (data.includes(todoRef.current.value)) {
      alert("이미 등록되어있습니다.");
      todoRef.current.value = "";
      todoRef.current.focus();
    } else {
      setData(todoRef.current.value);
      todoRef.current.value = "";
      todoRef.current.focus();
    }
  };

  return (
    <div>
      <h1>자식</h1>
      <InputGroup className="mb-2" style={{ width: "18rem" }}>
        <Form.Control
          ref={todoRef}
          placeholder="할일을 적어주세요."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onKeyUp={enterInsert}
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={insertTodo}
        >
          등록
        </Button>
      </InputGroup>
    </div>
  );
};

export default Child1;
