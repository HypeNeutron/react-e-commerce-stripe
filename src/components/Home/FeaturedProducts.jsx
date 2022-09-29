import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useProductsContext } from '../../context/products_context';
import Error from '../Error';
import Loading from '../Loading';
import Product from '../Products/ProductView/ProductsGridViewItem';

function FeaturedProducts() {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <Wrapper className="section">
      <div className="title">
        <h2>featured products</h2>
        <div className="underline" />
      </div>

      <div className="section-center featuredProducts">
        {featured.slice(0, 3).map((product) => {
          const { image, name, price, id } = product;
          return <Product key={product.id} {...{ image, name, price, id }} />;
        })}
      </div>
      <Link to="/products" className="btn">
        all products
      </Link>
    </Wrapper>
  );
}
export default FeaturedProducts;

const Wrapper = styled.section`
  background: var(--clr-grey-10);

  .featuredProducts {
    display: grid;
    margin: 4rem auto;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }

  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }

  @media (min-width: 576px) {
    .featuredProducts {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;
