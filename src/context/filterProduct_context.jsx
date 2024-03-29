import React, { useEffect, useContext, useReducer, useMemo } from 'react';
import reducer from './reducers/filterProduct_reducer';
import { useProductsContext } from './products_context';
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from './actions';

const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  sort: 'price-lowest',
  filters: {
    text: '',
    category: 'all',
    company: 'all',
    color: 'all',
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
};

const FilterProductContext = React.createContext();

export function FilterProductProvider({ children }) {
  const { products } = useProductsContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
  }, [products, state.sort, state.filters]);

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };

  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  const updateSort = (e) => {
    const { value } = e.target;
    dispatch({ type: UPDATE_SORT, payload: value });
  };

  const updateFilters = (e) => {
    const { name } = e.target;
    let { value } = e.target;

    switch (name) {
      case 'category':
        value = e.target.textContent;
        break;
      case 'color':
        value = e.target.dataset.color;
        break;
      case 'price':
        value = Number(value);
        break;
      case 'shipping':
        value = e.target.checked;
        break;
      default:
        break;
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  const allValue = useMemo(() => {
    return {
      ...state,
      setGridView,
      setListView,
      updateSort,
      updateFilters,
      clearFilters,
    };
  }, [state]);

  return (
    <FilterProductContext.Provider value={allValue}>
      {children}
    </FilterProductContext.Provider>
  );
}

export const useFilterProductContext = () => useContext(FilterProductContext);
