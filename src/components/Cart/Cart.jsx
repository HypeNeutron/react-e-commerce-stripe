import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cart_context';
import CartHeader from './CartHeader';
import CartItem from './CartItem';
import CartTotals from './CartTotals';

function Cart() {
  const { cart, clearCart } = useCartContext();
  return (
    <Wrapper className="section section-center">
      <CartHeader />
      {cart.map((item) => {
        const { id, image, name, color, price, amount } = item;
        return (
          <CartItem
            key={item.id}
            {...{ id, image, name, color, price, amount }}
          />
        );
      })}
      <hr />
      <div className="linkBtn-container">
        <Link to="/products" className="linkBtn">
          continue shopping
        </Link>
        <button
          type="button"
          className="linkBtn linkBtn--clear"
          onClick={clearCart}
        >
          clear shopping cart
        </button>
      </div>
      <CartTotals />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .linkBtn-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }

  .linkBtn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    text-align: center;
    width: 13em;
    padding: 0.25rem 0.5rem;
    display: grid;
    place-items: center;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;

    &--clear {
      background: var(--clr-black);
      @media (max-width: 776px) {
        margin-left: 1em;
      }
    }
  }
`;
export default Cart;
