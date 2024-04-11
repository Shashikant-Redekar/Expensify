// Higher Order Component (HOC) - A component(HOC) that renders another component(regular component).
//Reuse Code
//Render hijacking.
//prop manipulation
//Abstract state.

import React from "react";
import ReactDOM  from "react-dom";


const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This info is:{props.info}</p>
    </div>
);

const withAdminWarning  = (WrappedComponent) => {
    return (props) => (
        <div>
            <p>This is private info. please don't share!</p>
            <WrappedComponent {...props}/>
        </div>
    );
};



const AdminInfo = withAdminWarning(Info);

ReactDOM.render(<AdminInfo info="These are the detail"></AdminInfo>,document.getElementById('app'));