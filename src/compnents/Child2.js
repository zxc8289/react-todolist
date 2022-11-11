import React, { useEffect, useMemo, useRef, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";

const Child2 = ({ data, deleteData }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Header>할일 목록</Card.Header>
        <ListGroup variant="flush">
          {data.map((todo, index) => {
            return (
              <ListGroup.Item key={index}>
                {todo} <button onClick={() => deleteData(index)}>삭제</button>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Card>
    </div>
  );
};

export default Child2;
