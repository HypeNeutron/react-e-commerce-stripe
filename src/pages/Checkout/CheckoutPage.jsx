import React from 'react';
import styled from 'styled-components';
import { HeadNavigator, StripeIndex } from '../../components';

function CheckoutPage() {
  return (
    <main>
      <HeadNavigator title=" Checkout" />
      <Wrapper className="page">
        <StripeIndex />
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
