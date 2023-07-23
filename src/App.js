import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import exp from "constants";

const App = () => {
  const expenses = [
    {
      id: "1",
      title: "Car Insurance1",
      amount: 294.14,
      date: new Date(2021, 2, 28),
    },
    {
      id: "2",
      title: "Car Insurance2",
      amount: 294.13,
      date: new Date(2021, 2, 28),
    },
    {
      id: "3",
      title: "Car Insurance3",
      amount: 294.12,
      date: new Date(2021, 2, 28),
    },
    {
      id: "4",
      title: "Car Insurance4",
      amount: 294.1,
      date: new Date(2021, 2, 28),
    },
  ];

  const addExpenseHandler = expense =>{
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
