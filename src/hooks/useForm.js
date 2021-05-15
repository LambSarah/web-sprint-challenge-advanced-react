import { useState } from 'react'
//import OrderSuccess from '../OrderSuccess'

// custom hook for form control
export const useForm = (initialValues) => {
    //create generalized state object
    const [state, setState] = useState(initialValues);

    // on setShowSuccessMessage(true);Change handler for form
    const handleChanges = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setState({ ...state, showSuccessMessage: true })
    }
    return [state, handleChanges, handleSubmit];
}