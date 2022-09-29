import React from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { links } from '../../utils/Data';
import CartNavigate from './CartNavigator';
import { useProductsContext } from '../../context/products_context';
import { useCartContext } from '../../context/cart_context';
import { useUserContext } from '../../context/user_context';

function Navbar() {
  const { openSidebar } = useProductsContext();
  const { myUser } = useUserContext();
  const { total_items: totalItem } = useCartContext();

  return (
    <Nav>
      <div className="nav-layout">
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="comfy sloth" className="logo" />
          </Link>
          <button type="button" className="toggleBtn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>

        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
          {myUser && totalItem > 0 && (
            <li>
              <Link to="/checkout">checkout</Link>
            </li>
          )}
        </ul>
        <CartNavigate />
      </div>
    </Nav>
  );
}
export default Navbar;

const Nav = styled.nav`
  display: flex;
  height: 5rem;
  align-items: center;
  justify-content: center;

  .nav-layout {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  .nav-logo {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img.logo {
      width: 175px;
      margin-left: -15px;
    }

    .toggleBtn {
      background: transparent;
      border: transparent;
      color: var(--clr-primary-5);
      cursor: pointer;
      svg {
        font-size: 2rem;
      }
    }
  }

  .nav-links {
    display: none;
  }

  .cartNavigator {
    display: none;
  }

  @media (min-width: 992px) {
    .nav-layout {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }

    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
      }
      a:hover {
        border-bottom: 2px solid var(--clr-primary-7);
      }
    }

    .cartNavigator {
      display: grid;
    }

    .toggleBtn {
      display: none;
    }
  }
`;
