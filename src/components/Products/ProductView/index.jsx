import React from 'react';
import { useProductsContext } from '../../../context/products_context';
import { useFilterProductContext } from '../../../context/filterProduct_context';
import Error from '../../Error';
import Loading from '../../Loading';
import GridView from './ProductsGridView';
import ListView from './ProductListView';

export default function ProductView() {
  const { products_error: error, products_loading: loading } =
    useProductsContext();
  const { filtered_products: products, grid_view: gridView } =
    useFilterProductContext();

  if (error) return <Error />;

  if (loading) return <Loading />;

  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: 'none' }}>
        Sorry, no products matched your search.
      </h5>
    );
  }

  if (gridView === false) return <ListView products={products} />;

  return <GridView products={products} />;
}
