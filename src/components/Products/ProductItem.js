import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/helpers";

function ProductItem({ image, name, price, id }) {
  return (
    <Wrapper>
      <div className="imgContainer">
        <img src={image} alt={name} />
        <Link to={`/product/${id}`} className="linkProduct">
          <FaSearch />
        </Link>
      </div>
      <footer className="imgFooter">
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </footer>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  .imgContainer {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);

    :hover a:link {
      opacity: 1;
    }

    :hover img {
      opacity: 0.5;
    }
    img {
      width: 100%;
      display: block;
      object-fit: cover;
      border-radius: var(--radius);
      transition: var(--transition);
    }
    .linkProduct {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: var(--clr-primary-5);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      transition: var(--transition);
      opacity: 0;
      cursor: pointer;
      svg {
        font-size: 1.25rem;
        color: var(--clr-white);
      }
    }
  }

  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h5,
    p {
      margin-bottom: 0;
      font-weight: 400;
    }
    p {
      color: var(--clr-primary-5);
      letter-spacing: var(--spacing);
    }
  }
`;
export default ProductItem;
