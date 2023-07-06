import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  function saveExpenseDataHandler(enterExpnseData) {
    const expenseData = {
      ...enterExpnseData,
      id: "1"
    }
    console.log(expenseData)
    props.getExpenseData(expenseData);
    setIsEditing(false);
  }


  function StartEditingHandler() {
    setIsEditing(true);
  }
  function StopEditingHandler(){
    setIsEditing(false);
  }
  return (
    <>

      <div className='new-expense'>

        {!isEditing &&
          <button onClick={StartEditingHandler}>Click here to add expenses.</button>
        }
        {isEditing &&
          <ExpenseForm saveExpenseData={saveExpenseDataHandler} onCancel={StopEditingHandler} />
        }

      </div>


    </>

  );
};

export default NewExpense;