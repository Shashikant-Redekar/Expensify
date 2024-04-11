import React from "react";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { addExpense, editExpense } from "../action/expenses";
import { Link, Routes, Route, useNavigate  } from 'react-router-dom';

function param(){
    const { id } = useParams();
    return id;
}
function navig(){
    const navigate=useNavigate();
    return navigate;
}

function navi (props){
    let id = param();
    const navigate = navig();
    return(
        <div>
            <h1>Editing Expense of {id}</h1>
            <ExpenseForm 
            expense={props.expense}
            onSubmit={(expense) => {
                props.dispatch(editExpense(id,expense));
                console.log('updated',expense);
                console.log(id);
                navigate('/');
            }}
            />
        </div>
    );
};

// function mapStateToProp (state,props) {
//     const id = useParams();
//    // console.log(id);
//     return{
//         expense : state.expenses.find((expense) =>  expense.id === id),
//     };
// };

// const EditExpensePage = (props) => {
//     const id = param();
//     const navigate = navig();
//     return(
//         <div>
//             <ExpenseForm 
//             expense={props.expense}
//             onSubmit={(expense) => {
//                 //props.dispatch(editExpense(id,expense));
//                 console.log('updated',expense);
//                 console.log(id);
//                navigate('/');
//             }}
//             />
//         </div>
//     );
// };

const mapStatesToProps = (state) => {
    const id = param();
    return{
        expense : state.expenses.find((expense) =>  expense.id === id)
    };
};

//export default navi;
//export default connect(mapStateToProp)(navi);
export default connect(mapStatesToProps)(navi);