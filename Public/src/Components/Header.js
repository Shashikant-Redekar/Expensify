import React from "react";
import {BrowserRouter, Route, Routes, Link, NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <nav id="sidebar">
            <NavLink to="/">DashBoard </NavLink>
            <NavLink to="/create">Create Expense</NavLink>
            <NavLink to="/help">Help</NavLink>
        </nav>
    </header>
);

export default Header;