import { useState } from 'react'

// custom hook for form control
export const useForm = (initialValues) => {
    //create generalized state object
    const [state, setState] = useState(initialValues);

    // onChange handler for form inputs
    const handleChanges = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    // onSubmit handler form form
    const handleSubmit = e => {
        e.preventDefault();
        // makes success message visible
        setState({ ...state, showSuccessMessage: true })
    }
    return [state, handleChanges, handleSubmit];
}