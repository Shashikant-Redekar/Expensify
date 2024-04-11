import React from "react";
import {useParams} from "react-router-dom";

const PortfolioId = (props) => {
    const {id}= useParams();
    console.log(props);
    return(
        <div>
        <h1>My Work</h1>
        Checkout the following work I have done:
        <p>Element for Portfolio is {id}</p>
        </div>
    );
};

export default PortfolioId;