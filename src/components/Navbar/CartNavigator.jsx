import React from 'react';
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useProductsContext } from '../../hooks/context/products_context';
import { useCartContext } from '../../hooks/context/cart_context';
import { useUserContext } from '../../hooks/context/user_context';

function CartNavigator() {
  const { closeSidebar } = useProductsContext();
  const { total_items: totalItem, clearCart } = useCartContext();
  const { loginWithRedirect, myUser, logout } = useUserContext();

  const handleLogout = () => {
    clearCart();
    logout({ returnTo: window.location.origin });
  };

  return (
    <Wrapper className="cartNavigator">
      <Link to="/cart" className="cartNavigator__cart" onClick={closeSidebar}>
        Cart
        <span className="cart__icon">
          <FaShoppingCart /> <span className="cartTotal">{totalItem}</span>
        </span>
      </Link>
      {myUser ? (
        <button
          type="button"
          className="cartNavigator__auth"
          onClick={handleLogout}
        >
          Logout <FaUserMinus />
        </button>
      ) : (
        <button
          type="button"
          className="cartNavigator__auth"
          onClick={loginWithRedirect}
        >
          Login <FaUserPlus />
        </button>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

  .cartNavigator__cart {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;
    align-items: center;
  }

  .cart__icon {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
    .cartTotal {
      position: absolute;
      top: -10px;
      right: -16px;
      background: var(--clr-primary-5);
      width: 16px;
      height: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      font-size: 0.75rem;
      color: var(--clr-white);
      padding: 12px;
    }
  }

  .cartNavigator__auth {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`;
export default CartNavigator;
