import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

const Button = props => {
    return (
        <button type={props.type} className={props.classes}>
            <Link to={props.linkTo}>{props.label}</Link>
        </button>
    );
};

export default Button;
