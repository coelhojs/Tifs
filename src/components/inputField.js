import React from 'react';

const inputField = ({ input, textarea, select, label, type, meta: { touched, error, warning } }) => (
    <div>
        <label className="align-middle text-right">{label}</label>
        <div>
            <input className="form-control" {...input} placeholder={label} type={type} />
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
);

export default inputField;