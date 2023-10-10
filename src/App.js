import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpenses/NewExpense";
import ExpensesFilter from './components/ExpenseFilter'
import {useState} from 'react'

  const App = () => {
  const [expenses, setExpenses] = useState([
    {id: 1,title1: 'Car insurance', amount1: 345.56, date1: new Date(2023, 10, 7)},
    {id: 2,title1: 'New TV', amount1: 800, date1: new Date(2023, 5, 12)},
    {id: 3, title1: 'Computer', amount1: 567.67, date1: new Date(2023, 7, 10)},
    {id: 4, title1: 'Book', amount1: 120, date1: new Date(2023,1, 24)},
  ]);



  const addExpenseHandler = expense => {
   console.log('In App.js')
   console.log(expense)
  setExpenses((currentExpenseData) => {
    const newArray = [...currentExpenseData, expense]
    return newArray;
  }) 
  }



  // //adding extra
  //  const Expenses = (props) => {

  // const[initialFilterYear, setFilterYear] = useState('2023')

   const filterChangeHandler = selectedYear => {
      console.log("selectedYear")
      //setFilterYear(selectedYear)
     }
   //}

  return (
    <div>

       <ExpensesFilter onChangeFilter={filterChangeHandler} />
       {/* <ExpensesFilter /> */}

      <NewExpense onAddExpense={addExpenseHandler} />


    {/* Transforming the array into JSX */}
    {expenses.map(expenseVariable => <ExpenseItem 
    title1={expenseVariable.title1} 
    key = {expenseVariable.id}
    amount1={expenseVariable.amount1}
    date1={expenseVariable.date1}/>)}


      {/* Method -1 of passing expenses data in ExpenseItem component  */}
      {/* passing multiple props */}
      {/* <ExpenseItem title1={expenses[0].title} amount1={expenses[0].amount} date1={expenses[0].date}  />
      <ExpenseItem title1={expenses[1].title} amount1={expenses[1].amount} date1={expenses[1].date}  />
      <ExpenseItem title1={expenses[2].title} amount1={expenses[2].amount} date1={expenses[2].date}  />
      <ExpenseItem title1={expenses[3].title} amount1={expenses[3].amount} date1={expenses[3].date}  /> */}


      {/* Method-2 of passing expenses data in ExpenseItem component */}
      {/* passing the entire object in the expenses aray */}
      {/* <ExpenseItem expense1={expenses[0]} /> */}


    </div>
  );
}

export default App;
