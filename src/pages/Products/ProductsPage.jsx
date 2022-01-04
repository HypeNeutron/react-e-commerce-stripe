import React from 'react';
import styled from 'styled-components';
import {
  FiltersProducts,
  ProductView,
  SortProducts,
  HeadNavigator,
} from '../../components';

function ProductsPage() {
  return (
    <main>
      <HeadNavigator title=" Products" />
      <Wrapper className="page">
        <div className="section-center products">
          <FiltersProducts />
          <div className="product-main">
            <SortProducts />
            <ProductView />
          </div>
        </div>
      </Wrapper>
    </main>
  );
}

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }

  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default ProductsPage;
