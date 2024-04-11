import {BrowserRouter, Route, Routes, Link, NavLink} from 'react-router-dom';
import React from 'react';
import NotFoundPage from '../Components/PageNotFound';
import Header from '../Components/Header';
import Home from '../Components/Home';
import AddExpensePage from '../Components/AddExpencePage';
import HelpPage from '../Components/HelpPage';
import EditExpensePage from '../Components/EditExpensePage';

const AppRouter = () => (
        <BrowserRouter>
            <div>
                <Header />
                <Routes>
                    <Route path="/" Component={Home} />
                    <Route path="/create" Component={AddExpensePage} exact='true' />
                    <Route exact path="/edit/:id" Component={EditExpensePage}  />
                    <Route path="/help" Component={HelpPage} />
                    <Route path='*' Component={NotFoundPage} />
                </Routes>
            </div>
        </BrowserRouter>
);

export default AppRouter;
