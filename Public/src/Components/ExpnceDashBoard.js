import React from 'react';
import ExpenseList from './expenseList';
import ExpenseListFilter from './ExpenseListFileters';

const ExpenseDashBoardPage = () => (
    <div>
        <ExpenseListFilter />
        <ExpenseList />
    </div>
);

export default ExpenseDashBoardPage;

// function mapStateToProps(state) {
//     const name = {state}
//     return {
//         name:'Shashiaknt'
//     };
// };