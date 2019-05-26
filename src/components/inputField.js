import React from 'react';

const inputField = ({ input, textarea, select, label, type, meta: { touched, error, warning } }) => (
    <div className="form-group row">
        <label className="col-3 align-middle text-right">{label}</label>
        <div className="col-6">
            <input className="form-control" {...input} placeholder={label} type={type} />
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
);

export default inputField;