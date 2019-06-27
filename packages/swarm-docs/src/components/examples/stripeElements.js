import React, { useEffect, useState } from 'react';
import { CardNumberElement, Elements } from '@meetup/swarm-stripe';

const Example = () => {
  const [state, setState] = useState({ stripe: null });

  useEffect(() => {
    setState({ stripe: window.Stripe('pk_test_12345') });
  });

  return (
    <StripeProvider stripe={state.stripe}>
      <Elements>
        <CardNumberElement />
      </Elements>
    </StripeProvider>
  );
};

export default Example;
