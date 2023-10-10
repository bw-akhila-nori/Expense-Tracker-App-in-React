import './ExpenseForm.css'
import {useState} from 'react';


const ExpenseForm = (propsFromNewExpenseData) => {

    const [initialEnteredTitle, functionForUpdatingTheState] = useState(''); //initially its an empty string, 
    //bcz initially when the component was rendered, nothing was rendered
    //set the state for titleStateHandler, we are not passing anything 
    // to initialEnteredTitle ---> just user input 
    

    const [initialEnteredAmount, setAmountFunction]= useState('');

    const [initalEnteredDate, setDateFunction] = useState('')

    //storing the empty strings in useState('') --> as by default when you 
    //listen to the change input, you read the value of the input element
    // it will always be a string ... we always get a string event.target.value


    //this function will be called when the event onChange is executed
    const titleChangeHandler = (event) => {
        //Even though we don't explicitly specify event object here -> in React,
        //this is the default behaviour of JavaScript in browsers
        //For us React/browser makes sure that we get event object when ---
        //the event change occurs
        functionForUpdatingTheState(event.target.value) //I get the current value which I enter
                //with every key stroke 
       //passing the current entered value as parameter/argument to functionForUpdatingTheState
       //function 
       //This will be stored in our state 
       //console.log('Hello worold this is rtitle')

       

    }

    const amountChangeHandler = (event) => {
        //this function should get triggered when the amount changes 
        setAmountFunction(event.target.value);
    }

    const dateChangehandler = (event) => {
        setDateFunction(event.target.value)

    }

    const formSubmitHandler = (event) => {
        //we get an event object here automatically when event change occurs
        // from formSubmitHandler event when it executes, we get event object here
       
        event.preventDefault(); //everytime we click on submit button the browser
        //refreshes the webpage.... to prevent the Default refreshing of our 
        // webpage we use this in-build function 
       
        const combinedExpenseDataObject = {
            title1: initialEnteredTitle,
            amount1: initialEnteredAmount,
            date1: new Date(initalEnteredDate)
            //a new Date constructor --> to that we are passing string of data
            //which will inturn convert into a Date object
        };
        console.log("Logging here",combinedExpenseDataObject)


        propsFromNewExpenseData.onSavingExpenseFormDataHandlerProp(combinedExpenseDataObject);
        //combinedExpenseDataObject --> parameter will be received in NewExpense.js --> in its parameter

        functionForUpdatingTheState('');
        setAmountFunction(''); //setting it to initial value i.e, empty string
                           //and clearing the data, after user enters
        setDateFunction('');                   

    }

    return(     

            <form onSubmit={formSubmitHandler}>
                <div className="new-expense__controls">

                    <div className="new-expense__control">
                       <label>Title</label>
                       <input type="text"

                       value={initialEnteredTitle}
                       //here we just don't lsiten to the changes in the input to update our
                       //state --> but we also here are feeding back the changes into 
                       //input --> so that when we change the state, we also change 
                       // the input 

                        onChange={titleChangeHandler} />
                       {/* function that will be executed when onChange event listener 
                       is executed */}
                     </div>  

                     <div className="new-expense-control">
                        <label>Amount</label>
                        <input type='number'
                        value={initialEnteredAmount}
                        //to pass it back into the entered input -> when state updates
                         min="0.01" 
                         step="0.01" 
                         onChange={amountChangeHandler} />
                     </div>

                     <div className="new-expense-control">
                        <label>Date</label>
                        <input type='date'
                        value={initalEnteredDate}
                        //pass the entered date back into the input using value attribute
                         min="2023-01-01"
                         max="2040-12-31"
                         onChange={dateChangehandler} />
                     </div>

                 </div>

            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>

            </form>
    )

}
export default ExpenseForm;