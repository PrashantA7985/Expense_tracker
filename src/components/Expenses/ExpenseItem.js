import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../card";
import React, { useState } from "react";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  function clickHandler() {
    setTitle("updated");

    console.log("Prashant Kumar Singh");
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2 className="expense-item h2">{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        {/* <button onClick={clickHandler}>Button</button> */}
      </div>
    </Card>
  );
}
export default ExpenseItem;
