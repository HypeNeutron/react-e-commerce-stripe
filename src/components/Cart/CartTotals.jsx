import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cart_context';
import { useUserContext } from '../../context/user_context';
import { formatPrice } from '../../utils/helpers';

function CartTotals() {
  const { total_amount: totalAmount, shipping_fee: fee } = useCartContext();
  const { myUser, loginWithRedirect } = useUserContext();
  return (
    <Wrapper>
      <div className="cartTotal-center">
        <article>
          <h5>
            <span className="head">subtotal :</span>
            <span>{formatPrice(totalAmount)}</span>
          </h5>
          <p>
            <span className="head"> shipping fee :</span>
            <span>{formatPrice(fee)}</span>
          </p>
          <hr />
          <h4>
            <span className="head">order total:</span>
            <span>{formatPrice(totalAmount + fee)}</span>
          </h4>
        </article>
        {myUser ? (
          <Link to="/checkout" className="checkoutBtn btn">
            proceed to checkout
          </Link>
        ) : (
          <button
            type="button"
            className="checkoutBtn btn"
            onClick={loginWithRedirect}
          >
            Login
          </button>
        )}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  margin-top: 3rem;
  justify-content: center;

  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    max-width: 90vw;
    padding: 1.5em 3em;

    h4 {
      margin-top: 2rem;
    }

    p {
      text-transform: capitalize;
    }

    h4,
    h5,
    p {
      display: grid;
      grid-template-columns: 2.5fr 1fr;
    }
    .head {
      justify-self: start;
    }
  }
  .cartTotal-center {
    text-align: center;
  }

  .checkoutBtn {
    width: 100%;
    max-width: 90vw;
    margin: 0 auto;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }

  @media (min-width: 776px) {
    justify-content: flex-end;
  }
`;

export default CartTotals;
