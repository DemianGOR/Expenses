import React, {Component, useState} from 'react';
import ExpensesChart from "../Chart/ExpensesChart";
import Card from "../UI/Card"
import '../../Styles/ExpensItem.css'
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props){
    const[filteredYear,setFilteredYear]=useState("2021")
const filterChangeHandler=selectedYear=>{
    setFilteredYear(selectedYear);
};
   const filteredExpenses=props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear;
   });




        return (<div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                <ExpensesChart  expenses={filteredExpenses }/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
            </div>
        );
    }


export default Expenses;