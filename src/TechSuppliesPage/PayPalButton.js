import React from 'react';

export const PayPalButton = ({ onClick }) => {
  return (
    <button className="paypal-button" onClick={onClick}>
      <img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-large.png" alt="Pay with PayPal" />
      <span>Pay with PayPal</span>
    </button>
  );
};