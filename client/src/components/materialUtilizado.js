import React from 'react';
import { Field } from 'redux-form';
import inputField from "../components/inputField";

const MaterialUtilizado = ({fields}) => {
    return (
        <div>
            <ul>
                <li>
                    <button type="button" onClick={() => fields.push()}>
                        <img src="/img/add.png" alt="" />
                    </button>
                </li>
                {fields.map((hobby, index) => (
                    <li key={index}>
                        <button
                            type="button"
                            title="Remove Hobby"
                            onClick={() => fields.remove(index)}
                        />
                        <Field
                            name={hobby}
                            type="text"
                            component={inputField}
                            label={`Hobby #${index + 1}`}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MaterialUtilizado;