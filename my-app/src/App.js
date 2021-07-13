import './App.css';
import Expenses from "./Components/Expenses/Expenses";
import React ,{useState}from "react"
import NewExpense from "./Components/NEWExpenses/NewExpense";
import ExpensesFilter from "./Components/Expenses/ExpensesFilter";


    const DUMMY_EXPENSES = [
        {
            id: 1,
            title: "Car Insurance",
            amount: 269.99,
            date: new Date(2020, 8, 6)
        },
        {
            id: 2,
            title: "Car ",
            amount: 26009.99,
            date: new Date(2021, 2, 21)
        },
        {
            id: 3,
            title: "Bus ",
            amount: 7.50,
            date: new Date(2020, 6, 28)
        },
        {
            id: 4,
            title: "Book",
            amount: 4500,
            date: new Date(2021, 3, 28)
        }


    ];
   /* return React.createElement(
        'div',
        {},
        React.createElement('h2', {}, "This is also visible"),
        React.createElement(Expenses, {items: expenses})
    );*/
    const App=()=> {
        const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

        const addExpenseHandler = (expense) => {
            setExpenses((prevExpenses) => {
                return [expense, ...prevExpenses]
            });

        };


        return (
            <div className="App back">
                <NewExpense onAddExpense={addExpenseHandler}/>

                <Expenses items={expenses}/>

            </div>
        );
    };


export default App;
