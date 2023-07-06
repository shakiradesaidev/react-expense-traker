import React,{useState} from 'react';
import './ExpensesFilter.css'
function ExpensesFilter(props){
    // const [enteroption, setenterOption] = useState("");
    
    function dropdownChangeHandler(event){
       // setenterOption(event.target.value);
      console.log(event.target.value);
        props.onChangeFilter(event.target.value);

    }

    return(
       
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selectedYear} onChange={dropdownChangeHandler}>
                <option value='select'></option>
                <option value='2022'>2022</option>
                <option value='2021'>2021</option>
                <option value='2020'>2020</option>
                <option value='2019'>2019</option>
                </select>
            </div>
         </div>
     
    );

}

export default ExpensesFilter;