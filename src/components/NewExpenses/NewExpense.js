import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (propsFromApp) => {

    const onSavingExpenseFormDatahandler = (enteredExpenseDataComingFromcombinedExpenseDataObject) => {
     const expenseData1 = {
       ...enteredExpenseDataComingFromcombinedExpenseDataObject,
       //pull out all the key-value pairs and add to the expenseData1 object

       id: Math.random().toString()
     }
     console.log("New expense",expenseData1)
     propsFromApp.onAddExpense(expenseData1);
    }

    return(
        <div className = "new-expense">
            <ExpenseForm onSavingExpenseFormDataHandlerProp={onSavingExpenseFormDatahandler}/>
        </div>
    )


}

export default NewExpense;