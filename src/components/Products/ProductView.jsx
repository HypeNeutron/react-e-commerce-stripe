import React from 'react';
import { useFilterProductContext } from '../../hooks/context/filterProduct_context';
import { useProductsContext } from '../../hooks/context/products_context';
import Error from '../Error';
import Loading from '../Loading';
import GridView from './ProductViews/ProductsGridView';
import ListView from './ProductViews/ProductListView';

export default function ProductView() {
  const { products_error: error, products_loading: loading } =
    useProductsContext();
  const { filtered_products: products, grid_view: gridView } =
    useFilterProductContext();

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: 'none' }}>
        Sorry, no products matched your search.
      </h5>
    );
  }

  if (gridView === false) {
    return <ListView products={products} />;
  }

  return <GridView products={products} />;
}
