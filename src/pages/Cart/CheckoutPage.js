import React from 'react';
import styled from 'styled-components';
import { HeadNavigator, StripeCheckout } from '../../components';

// import { useCartContext } from '../../hooks/context/cart_context';
// import { Link } from 'react-router-dom';

function CheckoutPage() {
  // const { cart } = useCartContext;

  return (
    <main>
      <HeadNavigator title=' Checkout' />
      <Wrapper className='page'>
        <StripeCheckout />
      </Wrapper>
    </main>
  );
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default CheckoutPage;
