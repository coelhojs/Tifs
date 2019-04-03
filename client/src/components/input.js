import React from "react";

const Input = props => {
    return (
        <div className="form-group row">
            <label htmlFor={props.name} className={props.labelClasses}>
                {props.label}
            </label>
            <div className={props.inputClasses}>
                <input
                    className={"form-control"}
                    id={props.name}
                    name={props.name}
                    type={props.inputType}
                    value={props.value}
                    onChange={props.handleChange}
                    placeholder={props.placeholder}
                />
            </div>
        </div>
    );
};

export default Input;
