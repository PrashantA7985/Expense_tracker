import React from "react";
import ExpenseItem from "./ExpenseItem";
import Expenses from "./Expenses";

function ExpensesList(props){

    let expenseContent=<p className='item'>No items found</p>;
 if(props.items.length >0){
  expenseContent=props.items.map((expense)=>( 
    <ExpenseItem
    title={expense.title}
    key={expense.id}
    amount={expense.amount}
    date={expense.date}
    />
  ))
 } 
    return(
        expenseContent
    )
}
export default ExpensesList;