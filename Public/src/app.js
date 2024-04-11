// //import './utils.js';
// import subtract,{square, add} from './utils.js';

// console.log('app.js is running shashikant');
// console.log(square(4));
// console.log(add(28,9));
// console.log(subtract(28,9)); //any name can be used as defined while importing.

// import isSenior, {isAdult, canDrink} from './person.js';

// console.log(isAdult(15));
// console.log(canDrink(21));
// console.log(isSenior(70));

import React from 'react';
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import AppRouter from './Routers/AppRouters';
import configureStore from './store/configure_store';
import { addExpense } from './action/expenses';
//import {setTextFilter} from './action/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';  //to normalize content for all type of browsers
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water Bill', amount: 4500, createdAt: 4 }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 100, createdAt: 1 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500, createdAt: 12042024 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

const container = document.getElementById('app');

// ReactDOM.render(jsx, container);

ReactDOM.createRoot(container).render(jsx);

// const root = ReactDOM.createRoot(container).render(jsx);
// root.render(jsx);


