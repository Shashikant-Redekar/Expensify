import React from "react";
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {removeExpense} from '../action/expenses';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt, note}) => (
    <div>
        <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
        <p>{amount} - {createdAt}{`-${note}`}</p>
        <button onClick={() => {
            dispatch(removeExpense({ id }));
        }
        }>Remove</button>
    </div>
);

//export default ExpenseListItem; does not work as remove expence(dispatch) is not included hence connect.

export default connect()(ExpenseListItem);
