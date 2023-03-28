

// function App() {
//   const para=document.createElement('p');
// para.textContent='I am the devil of my world';
// document.getElementById('root').append(para);
//   return (
//     <div className="App">
//      <h1>Prashant Kumar Singh</h1>
//      <p>i get a good marks in gate exam</p>
//     </div>
//   );
// }
// import ExpenseItem from './components/ExpenseItem'

// function App(){
//   return (
//     <>
//     <h1>Prashant Kumar Singh</h1>
//     <ExpenseItem></ExpenseItem>
//       <ExpenseItem></ExpenseItem>
//       <ExpenseItem></ExpenseItem>
//       <ExpenseItem></ExpenseItem>
//       <ExpenseItem></ExpenseItem>

//     </>
//   )
// }

// export default App;
import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem'
import   './Expenses.css'
import Card from '../card.js';

import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
// function Expenses(props) {
 
 
//   const filterChangeHandler = selectedYear =>{
//     setFilteredYear(selectedYear);
//   };
 
//     const [filteredYear, setFilteredYear]= useState('2020');
  


//   return (
//     <div>
   
    
      
//      <Card className='expenses'>
//      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
//        <ExpenseItem 
//       title ={props.items[0].title}
//       amount ={props.expitems.amount}
//       date ={props.items[0].date}
//       ></ExpenseItem>
//       <ExpenseItem 
//       title ={props.items[1].title}
//       amount ={props.items[1].amount}
//       date ={props.items[1].date}
//       ></ExpenseItem>
//       <ExpenseItem 
//       title ={props.items[2].title}
//       amount ={props.items[2].amount}
//       date ={props.items[2].date}
//       ></ExpenseItem>
//       <ExpenseItem 
//       title ={props.items[3].title}
//       amount ={props.items[3].amount}
//       date ={props.items[3].date}
//       ></ExpenseItem> 
      
//      </Card>
//     </div>
//   );
// }

// export default Expenses;






// import React, { useState } from 'react';

// import ExpenseItem from './ExpenseItem';
// // import Card from '../UI/Card';
// import ExpensesFilter from './ExpensesFilter';
// import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses =props.items.filter((expense)=>{
    return expense.date.getFullYear().toString()===filteredYear;
  })
  

 

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter 
        selected={filteredYear} 
        onChangeFilter={filterChangeHandler}
         />
         <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
        <ExpensesList items={filteredExpenses}></ExpensesList>
         
      </Card>
    </div>
  );
};

export default Expenses;
