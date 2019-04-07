import React from 'react'
import { Field, reduxForm } from 'redux-form'

const ServicoFormPage2 = (props) => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
        </form>
    )
}

export default reduxForm({
    form: 'wizard',                 // <------ same form name
    destroyOnUnmount: false,        // <------ preserve form data
    forceUnregisterOnUnmount: true  // <------ unregister fields on unmount
})(ServicoFormPage2)