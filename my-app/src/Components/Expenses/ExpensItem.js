import "../../Styles/ExpensItem.css"
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "../../Styles/Card.css"
import React, {useState}from "react"

function ExpenseItem(props){
    const [title ,setTitle]=useState(props.title);

    const ClickHandler =()=>{
        setTitle("Updating");
    }
    return(
<li>
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>

            </div>
            <button onClick={ClickHandler} >Change title</button>
        </Card>
</li>
    );
}
export default ExpenseItem;