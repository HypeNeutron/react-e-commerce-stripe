import axios from 'axios';
import React, { useCallback, useContext, useEffect, useReducer } from 'react';
import reducer from '../reducers/products_reducer';
import { productsUrl as proUrl } from '../../utils/Data';
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_LOADING,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../../actions';

const initialState = {
  isSidebarOpen: false,
  products: [],
  products_loading: false,
  products_error: false,
  featured_products: [],
  single_product: [],
  single_product_loading: false,
  single_product_error: false,
};

const ProductsContext = React.createContext();

export function ProductsProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const fetchProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_LOADING });
    try {
      const resp = await axios.get(url);
      const products = resp.data;
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  const fetchSingleProduct = useCallback(async (url) => {
    dispatch({ type: GET_SINGLE_PRODUCT_LOADING });
    try {
      const resp = await axios.get(url);
      const singleProduct = resp.data;
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  }, []);

  useEffect(() => {
    fetchProducts(proUrl);
  }, []);

  const allValue = React.useMemo(() => {
    return {
      ...state,
      openSidebar,
      closeSidebar,
      fetchSingleProduct,
    };
  }, [state, fetchSingleProduct]);

  return (
    <ProductsContext.Provider value={allValue}>
      {children}
    </ProductsContext.Provider>
  );
}

export const useProductsContext = () => useContext(ProductsContext);
