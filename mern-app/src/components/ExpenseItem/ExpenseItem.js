import React from "react";
import Card from "../Card/Card";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import "./ExpenseItem.css";
import { useState } from "react";

const ExpenseItem = (props) => {
  //   const expenseDate = new Date(2021, 10, 3);
  //   const expenseTitle = "Phone Bill";
  //   const expenseAmount = "89.47";

  // return (
  //   <div className="expense-item">
  //     <ExpenseDate date={props.date} />
  //     <div className="expense-item__description">
  //       <h2>{props.title}</h2>
  //       <div className="expense-item__price">{props.amount}</div>
  //     </div>
  //   </div>
  // );

  // let title = props.title;

  const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //   console.log("Say Hello");
  //   // title="Updated!";
  //   setTitle("Updated");
  // };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
