import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
class Payments extends Component {
  render() {
    debugger;
    return (
      <StripeCheckout amount={500} token={process.env.REACT_APP_STRIPE_KEY} />
    );
  }
}

export default Payments;