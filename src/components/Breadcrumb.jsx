import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Breadcrumb({ title, product }) {
  return (
    <Wrapper>
      <div className="section-center">
        <h3 className="header">
          <Link to="/">Home</Link>
          {product && <Link to="/products">/ Products</Link>}/ {title}
        </h3>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  background: var(--clr-primary-10);
  color: var(--clr-primary-1);
  width: 100%;
  min-height: 20vh;
  align-items: center;

  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`;
