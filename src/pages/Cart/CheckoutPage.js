import React from 'react';
import styled from 'styled-components';
import { HeadNavigator, StripeCheckout } from '../../components';

function CheckoutPage() {
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
