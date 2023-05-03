import React, { useState } from "react";
import "./checkout.css";

export const Checkout = () => {
    const [] = useState({
        name: "",
        email: "",
        street: "",
        city: "",
        postcode: "",
        card: "",
        details: "",
        date: "",
        cvv: "",
    });

    const handleChange = () => {};

    function sayCompleted() {
        alert('Payment Accepted!');
    }

    return ( 
    <form className="form">
        <h3>Name</h3> <input type="text" name="name" onChange={handleChange} />
        <h3>Email</h3> <input type="text" name="email" onChange={handleChange} />
        <h3>Street</h3> <input type="text" name="street" onChange={handleChange} />
        <h3>City</h3> <input type="text" name="city" onChange={handleChange} />
        <h3>Postcode</h3> <input type="text" name="postcode" onChange={handleChange} />
        <h3>Card Name</h3> <input type="text" name="card" onChange={handleChange} />
        <h3>Card Number</h3> <input type="text" name="details" onChange={handleChange} />
        <h3>Expiry Date</h3> <input type="text" name="date" onChange={handleChange} />
        <h3>CVV</h3> <input type="text" name="cvv" onChange={handleChange} />
        <div className="pay">
        <button type="submit" onClick={sayCompleted}>Pay Now</button>
        </div>
    </form>
    );
};