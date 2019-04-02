import React from "react";

const input = () => {
    return (
        <div className="form-group row">
            <label htmlFor={props.name} className={props.labelClasses}>
                {props.label}
            </label>
            <input
                className={`form-control ${props.inputClasses}`}
                id={props.name}
                name={props.name}
                type={props.inputType}
                value={props.value}
                onChange={props.handleChange}
                placeholder={props.placeholder}
                {...props}
            />
        </div>
    );
};

export default input;
