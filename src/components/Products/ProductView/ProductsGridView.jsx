import React from 'react';
import styled from 'styled-components';
import ProductsGridViewItem from './ProductsGridViewItem';

export default function ProductsGridView({ products }) {
  return (
    <Wrapper>
      <div className="products-container">
        {products.map((product) => {
          const { image, name, price, id } = product;
          return (
            <ProductsGridViewItem
              key={product.id}
              {...{ image, name, price, id }}
            />
          );
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  img {
    height: 175px;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
