import "./ExpensesList.css"
import ExpenseItem from "./ExpensItem";
import React  from "react"

const ExpensesList=(props)=>{
    if(props.items.length ===0){
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    }

    return<ul className="expenses-list">
        {props.items.map((expense ) =>(
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={parseFloat( expense.amount)}
                date={expense.date}
            />))}
    </ul>
};

export default ExpensesList;