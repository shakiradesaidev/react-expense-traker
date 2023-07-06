import React, { useState } from 'react';
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(filterItems => filterItems.date.getFullYear().toString() === filteredYear);

  // let expenseContent = <p>Expenses not found</p> 

  // if(filteredExpenses.length > 0){
  //     expenseContent= (
  //         filteredExpenses.map((expense) => (
  //           <ExpenseItem
  //             key={expense.id}
  //             title={expense.title}
  //             amount={expense.amount}
  //             date={expense.date}
  //           />
  //         ))
  //       )
  // }

  console.log(filteredExpenses)
  return (
    <Card className="expenses">
      <ExpensesFilter onChangeFilter={filterChangeHandler} selectedYear={filteredYear} />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpenseList filteredExpenses={filteredExpenses} />

      {/* {expenseContent} */}

      {/* /** By ternery operator  {
        filteredExpenses.length == 0 ? <p>Expenses not found</p> : (
            filteredExpenses.map((expense) => (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            ))
          )
       } */}

      {/* By Logical and operator {
        filteredExpenses.length === 0 && <p>Expenses not found</p> 

       }
       {
        filteredExpenses.length > 0 &&  (filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          )))
       } */}


    </Card>
  );

}

export default Expenses;
