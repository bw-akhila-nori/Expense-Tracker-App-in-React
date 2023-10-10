import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import {useState} from 'react'; //this allows us to define values as states
//useState is a react hook

//Method-1of1 of passing props 
function ExpenseItem(props){

    //Method-2of2 of passing props --> using object destructuring 
    // function ExpenseItem({date1, title1, date1}){
    //in such case you can use --> <h2>{title1}</h2> ... and so on 


    // that one parameter (props --> is the parameter here/object) which we are 
    //receiving here will be --
    //--> will be an Object
    // ---> which holds all received parameters as properties, hence the name
    // --> props 
    //we get key-value pairs in this props object, which is passed by react
    //The keys will be attribute name : title, amount, date
    //The values will be : the values set in the expenses array


//   const expenseDate = new Date(2023, 10,7);
//   const expenseTitle = 'Car Insurance';
//   const expenseAmount = 500.24;

// const month = props.date1.toLocaleString('en-US',{month:'long'});
// const day = props.date1.toLocaleString('en-US',{day: '2-digit'})
// const year = props.date1.getFullYear();

const [titleInitialValue, setTitle] = useState(props.title1);
//we are passing props.title1 to useState
//First value in the array here, is the initial value and 
//the second value in the array is the updating function
//here we havs used array destructuring ---> 
//the 1st element in the array --> titleInitialValue ---> points at the value stored in props.title1
// the 2nd element in the array is : setTitle --> is a function


// let title1 = props.title1;

   const clickHandlerAkhila = () => {
    //console.log('Clicked!!')
    // This arrow function will get executed when onClick button is clicked
    //This function is triggered when evwnt is executed 

    // title1 = "Updated Akhila!"; //changing the title value onClick
    //i) The button onClick is clicked
    //ii) Then this function is executed
    // iii) Then in <h2> tag .... inside return props.title2 will be executed
    // title2 will be executed and the value will become Updated Akhila upon button click
    
   setTitle('Oops, changed title'); //we are calling the state updating function
   //console.log(setTitle);
  
   //The new value of setTitle is assigned to titleInitialValue
   //in <h2> tag below, we are displaying the value of titleInitial Value
   //while --> useState(props.title1) --> this value, the intial value once it is
   //inialized

   }

    return (
        <div className="expense-item">

            <ExpenseDate date1={props.date1} />

            {/* <div>{expenseDate.toISOString()}</div> */}

            {/* Methtod-1 */}
            {/* <div>{props.date1.toISOString()}</div> */}

            {/* <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>

            </div> */}

            {/* Method-2 */}
            {/* <div>{props.expense1.date}</div> */}


            {/* props (date1, title1, amoutn1) are passed from App.js --> data is passed from App.js where
            we are rendering our <ExpenseItem /> component in App.js  */}

            {/* NOTE : The data is being imported from a different component
            i.e., the data is being imported from App.js component
            we are passing the data defined in that component to this component
            via props  */}

            <div className="expense-item__description">
                {/* <h2>{Math.random()}</h2> */}
                {/* <h2>{expenseTitle}</h2> */}

                {/* <h2>{props.title1}</h2> */}

                {/* <h2>{props.title1}</h2> */}
                <h2>{titleInitialValue}</h2>

                {/* <div className="expense-item__price">${expenseAmount}</div> */}
                <div className="expense-item__price">${props.amount1}</div>
             </div>

             {/* <button onClick={()=> {console.log('clicked!')} }>Change Title</button> */}
            {/* //  onClick --> is an Event listener, when you click on the button,
            //  there is an arrow function which you specify */}

            <button onClick={clickHandlerAkhila}>Change Title when clicked here</button>
        </div>
    )
}

export default ExpenseItem;