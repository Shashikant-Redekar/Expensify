import {createStore, combineReducers} from 'redux';
import { v4 as uuidv4 } from 'uuid';

const expensesReducerDefaultState = [];

//Add Expense
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type:'ADD_EXPENSE',
    expense: {
        id: uuidv4(),
        description,
        note,
        amount,
        createdAt,
    }
});

//Remove Expense

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const editExpense = (id, updates ) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type){ 
        case 'ADD_EXPENSE':
            //return state.concat(action.expense);
            return [
                ...state, action.expense
            ];
            case 'REMOVE_EXPENSE':
                return state.filter(({ id }) => {
                    return id !== action.id;
                });
            case 'EDIT_EXPENSE':
                return state.map((expense) => {
                    if (expense.id === action.id){
                        return {
                            ...expense,
                            ...action.updates
                        };
                    } else {
                        return expense;
                    }
                });
        default:
            return state;
    }
};

//Set Text Filter
const setTextFileter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

//Sort By Date
const sortByDate = () => ({
    type: 'DATE',
});

//Sort By Amount
const sortByAmount = () => ({
    type: 'AMOUNT',
});

//Set Start Date
const setStartDate = (date) => ({
    type: 'START_DATE',
    date,
});

//Set End Date
const setEndDate = (date ) => ({
    type: 'END_DATE',
    date,
});

//Filters Reducer

const filterReducesDefaultState = {
    text : '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
}

const filterReducer = (state = filterReducesDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'DATE':
            if (action.sortBy === 'date'){
                return{
                    ...state
                };
            } else {
                return{
                    ...state,
                    sortBy: 'date'
                }
            };
        case 'AMOUNT':
            if (action.sortBy === 'amount'){
                return{
                    ...state
                };
            } else {
                return{
                    ...state,
                    sortBy: 'amount'
                }
            };   
        case 'START_DATE':
            if(action.date){
                return{
                    ...state,
                    startDate : action.date
                };
            } else {
                return{
                    ...state,
                    startDate: undefined,
                };
            }
        case 'END_DATE':
            if(action.date){
                return{
                    ...state,
                    endDate: action.date
                };
            } else {
                return {
                    ...state,
                    endDate: undefined,
                };
            }
        default:
            return state;
    }
};

//Get visible Expenses
const getVIsibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if (sortBy === 'date'){
            return a.createdAt < b.createAt ? 1 : -1;  //-1 is for a and 1 for b so if true b comes first else a
        } else {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

//Store Creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer,
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVIsibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount:500, createdAt:-1000}));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount:300, createdAt:1000}));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

//store.dispatch(setTextFileter('ffe'));
// store.dispatch(setTextFileter());

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

//store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(224));
// store.dispatch(setEndDate());

const demoState = {
    expenses:[{
        id:'shashi',
        description: 'January Rent',
        note:'this is my name',
        amount: 5000,
        createAt:0,
    }],
    filters:{
        text:'rent',
        sortBy:'amount', //date or amount.
        startDate: undefined,
        endDate: undefined,
    }
};

// const user = {
//     name: 'Shashikant',
//     age:26
// };

// console.log({ ...user, location:'India', age:22 }); //adding new item and overriding age.
