import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {addExpense} from '../action/expenses';
import { Link, Routes, Route, useNavigate  } from 'react-router-dom';

function nav (props) {
    const navigate = useNavigate();
    return(
        <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
            onSubmit={(expense) => {
                props.dispatch(addExpense(expense));
                navigate('/');
            }}
        />
    </div>
    );
};

// const AddExpensePage = (props) => (
//     <div>
//         <h1>Add Expense</h1>
//         <ExpenseForm 
//             onSubmit={(expense) => {
//                 props.dispatch(addExpense(expense));
//                 nav();
//             }}
//         />
//     </div>
// );

export default connect()(nav);