import React from "react";
import { useForm } from '../hooks/useForm'

//set initial form values
const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  showSuccessMessage: false,
};

const CheckoutForm = (props) => {
  // custom hook 'useForm' to handle form control
  const [state, handleChanges, handleSubmit] = useForm(initialValue);

  return (
    <>
      <form onSubmit={handleSubmit} showSuccessMessage={state.showSuccessMessage}>
        <h2>Checkout Form</h2>
        <label>
          First Name:
          <input
            name="firstName"
            value={state.firstName}
            onChange={handleChanges}
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={state.lastName}
            onChange={handleChanges}
          />
        </label>
        <label>
          Address:
          <input
            name="address"
            value={state.address}
            onChange={handleChanges}
          />
        </label>
        <label>
          City:
          <input name="city" value={state.city} onChange={handleChanges} />
        </label>
        <label>
          State:
          <input name="state" value={state.state} onChange={handleChanges} />
        </label>
        <label>
          Zip:
          <input name="zip" value={state.zip} onChange={handleChanges} />
        </label>
        <button>Checkout</button>
      </form>


      {state.showSuccessMessage && (
        <div className="success-message" data-testid="successMessage">
          <p>
            You have ordered some plants! Woo-hoo! <span aria-label='party-favor' role="img">🎉</span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            {state.firstName} {state.lastName}
          </p>
          <p>{state.address}</p>
          <p>
            {state.city}, {state.state} {state.zip}
          </p>
        </div>
      )}
    </>
  );

};

export default CheckoutForm;
