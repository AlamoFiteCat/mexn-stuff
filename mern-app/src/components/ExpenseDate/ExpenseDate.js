import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const dateObj = {
    month: props.date.toLocaleString("en-US", { month: "long" }),
    day: props.date.toLocaleString("en-US", { day: "2-digit" }),
    year: props.date.getFullYear(),
  };

  return (
    <div className="expense-date">
      <div className="expense-date__month">{dateObj.month}</div>
      <div className="expense-date__year">{dateObj.year}</div>
      <div className="expense-date__day">{dateObj.day}</div>
    </div>
  );
}

export default ExpenseDate;
