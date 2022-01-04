import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { links } from '../../utils/Data';
import logo from '../../assets/logo.svg';
import CartNavigator from './CartNavigator';
import { useUserContext } from '../../hooks/context/user_context';
import { useCartContext } from '../../hooks/context/cart_context';
import { useProductsContext } from '../../hooks/context/products_context';

function SidebarNavigator() {
  const { isSidebarOpen, closeSidebar } = useProductsContext();
  const { myUser } = useUserContext();
  const { total_items: totalItem } = useCartContext();
  return (
    <SidebarNavigateContainer>
      <aside
        className={`${isSidebarOpen ? 'sidebar sidebar--show' : 'sidebar'}`}
      >
        <div className="sidebar__header">
          <img src={logo} className="logo" alt="comfy sloth" />
          <button className="close-btn" type="button" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>

        <ul className="sidebar__links">
          {links.map(({ id, text, url }) => (
            <li key={id}>
              <Link to={url} onClick={closeSidebar}>
                {text}
              </Link>
            </li>
          ))}
          {myUser && totalItem > 0 && (
            <li>
              <Link to="/checkout" onClick={closeSidebar}>
                checkout
              </Link>
            </li>
          )}
        </ul>
        <CartNavigator />
      </aside>
    </SidebarNavigateContainer>
  );
}
export default SidebarNavigator;

const SidebarNavigateContainer = styled.div`
  text-align: center;
  aside.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
    &--show {
      transform: translate(0);
      z-index: 999;
    }
  }

  .sidebar__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;

    .logo {
      justify-self: center;
      height: 45px;
    }

    .close-btn {
      font-size: 2rem;
      background: transparent;
      border-color: transparent;
      color: var(--clr-primary-5);
      transition: var(--transition);
      cursor: pointer;
      color: var(--clr-red-dark);
      margin-top: 0.2rem;
    }
    .close-btn:hover {
      color: var(--clr-red-light);
    }
  }

  .sidebar__links {
    margin-bottom: 2rem;
    a {
      display: block;
      text-align: left;
      font-size: 1rem;
      text-transform: capitalize;
      padding: 1rem 1.5rem;
      color: var(--clr-grey-3);
      transition: var(--transition);
      letter-spacing: var(--spacing);
    }

    a:hover {
      padding-left: 2rem;
      background: var(--clr-grey-10);
      color: var(--clr-grey-2);
    }
  }

  .cartNavigator {
    margin: 2rem auto;
  }

  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;
