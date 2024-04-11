import React from "react";
import {Link} from "react-router-dom"

const Portfolio =() => (
    <div>
        <h1>My Work</h1>
        <p>Checkout the following work I have done:</p>
        <Link to="/portfolio/11">Item One</Link>
        <Link to="/portfolio/22">Item Two</Link>
    </div>
);

export default Portfolio;