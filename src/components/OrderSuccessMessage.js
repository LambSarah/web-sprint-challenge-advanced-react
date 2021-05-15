import React from 'react';

const OrderSuccessMessage = props => {
    return (
        <div className="success-message" data-testid="successMessage">
            <p>
                You have ordered some plants! Woo-hoo! <span aria-label='party-favor' role="img">🎉</span>
            </p>
            <p>Your new green friends will be shipped to:</p>
            <br />
            <br />
            <p>
                {[props].firstName} {props.lastName}
            </p>
            <p>{props.address}</p>
            <p>
                {props.city}, {props.state} {props.zip}
            </p>
        </div>
    )
}

export default OrderSuccessMessage