import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import exp from "constants";

const DUMMY_EXPENSES = [
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


const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense =>{
    console.log(expense);
    setExpenses((prevExpenses) =>{
      console.log("HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH");
      console.log(expense);
      console.log(prevExpenses)
      return [expense,...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
