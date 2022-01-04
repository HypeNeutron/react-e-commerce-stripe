import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../hooks/context/cart_context';
import { Cart, HeadNavigator } from '../../components';

function CartPage() {
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return (
      <Wrapper className="page-100">
        <div className="cartEmpty-container">
          <h2>Your cart is empty</h2>
          <Link to="/products" className="btn">
            Fill it
          </Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <main>
      <HeadNavigator title=" Cart" />
      <Wrapper className="page">
        <Cart />
      </Wrapper>
    </main>
  );
}

const Wrapper = styled.main`
  .cartEmpty-container {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`;

export default CartPage;
