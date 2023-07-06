import React,{useState} from 'react';

import './ExpenseForm.css';


const ExpenseForm = (props) => {
  const [entertitle, setenterTitle] = useState("");
  const [enteramount, setenterAmount] = useState("");
  const [enterdate, setenterDate] = useState("");
 // const [userinput, setUserInput]= useState({entertitle:"",enteramount:"",enterdate:""})
 function titleChangehandler(event){
  //({...userinput, entertitle:event.target.value})
  setenterTitle(event.target.value)
 }

 function amountChangehandler(event){
  setenterAmount(event.target.value)
 }

 function dateChangehandler(event){
  setenterDate(event.target.value)
 }


 function submitHandler(e){
  e.preventDefault();
  const expenseData= {
    title:entertitle, 
    amount:enteramount,
    date:new Date(enterdate)
  }
props.saveExpenseData(expenseData);
  setenterTitle("");
  setenterAmount("");
  setenterDate("");
 }
  return (
 
    

    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={entertitle} onChange={titleChangehandler}  required/>
        </div>
        
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' value={enteramount} min='0.01' step='0.01' onChange={amountChangehandler} required/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' value={enterdate} min='2019-01-01' max='2022-12-31' onChange={dateChangehandler} required/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Add Expense</button>
       
      </div>
    </form>
  
  );
};

export default ExpenseForm;