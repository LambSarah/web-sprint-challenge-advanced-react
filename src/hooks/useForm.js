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
        //prevent page from re-rendering
        e.preventDefault();
        // makes success message visible
        setState({ ...state, showSuccessMessage: true })
    }
    return [state, handleChanges, handleSubmit];

}



/*{this.state?.plants?.map((plant) => (
         <div className="plant-card" key={plant.id} data-testid="plant-card">
           <img className="plant-image" src={plant.img} alt={plant.name} />
           <div className="plant-details">
             <h2 className="plant-name">{plant.name}</h2>
             <p className="plant-scientific-name">{plant.scientificName}</p>
             <p>{plant.description}</p>
             <div className="plant-bottom-row">
               <p>${plant.price}</p>
               <p>☀️ {plant.light}</p>
               <p>💦 {plant.watering}x/month</p>
             </div>
             <button
               className="plant-button"
               onClick={() => this.props.addToCart(plant)}
             >
               Add to cart
             </button>
           </div>
         </div>
       ))}
   */