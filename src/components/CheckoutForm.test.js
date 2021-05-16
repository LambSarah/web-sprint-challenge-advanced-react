import React from "react";
import { render, screen, within } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
    const header = screen.getByText(/checkout form/i);
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);
    userEvent.type(screen.getByLabelText(/first name/i), 'jane');
    userEvent.type(screen.getByLabelText(/last name/i), 'doe');
    userEvent.type(screen.getByLabelText(/address/i), '100 Memory Lane');
    userEvent.type(screen.getByLabelText(/city/i), 'Anytown');
    userEvent.type(screen.getByLabelText(/state/i), 'AZ');
    userEvent.type(screen.getByLabelText(/zip/i), '10101');
    const button = screen.getByRole('button');
    userEvent.click(button);

    const successMsg = screen.getByTestId('successMessage');
    expect(successMsg).toBeTruthy();
    expect(successMsg).toBeInTheDocument();


    const fname = within(successMsg).getByText(/jane/i);
    expect(fname).toBeInTheDocument();

    const lname = within(successMsg).getByText(/doe/i);
    expect(lname).toBeInTheDocument();

    const address = within(successMsg).getByText(/100 memory lane/i);
    expect(address).toBeInTheDocument();

    const city = within(successMsg).getByText(/anytown/i);
    expect(city).toBeInTheDocument();

    const state = within(successMsg).getByText(/az/i);
    expect(state).toBeInTheDocument();

    const zip = within(successMsg).getByText(/10101/i);
    expect(zip).toBeInTheDocument();

});
