import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions';

const filterProductReducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS: {
      let maxPrice = action.payload.map((p) => p.price);
      maxPrice = Math.max(...maxPrice);
      return {
        ...state,
        all_products: [...action.payload],
        filtered_products: [...action.payload],
        filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
      };
    }

    case SET_GRIDVIEW: {
      return { ...state, grid_view: true };
    }

    case SET_LISTVIEW: {
      return { ...state, grid_view: false };
    }

    case UPDATE_SORT: {
      return { ...state, sort: action.payload };
    }

    case SORT_PRODUCTS: {
      const { sort, filtered_products: filteredProducts } = state;
      switch (sort) {
        case 'price-lowest': {
          //* Sort for price value Less-than or More-then -1 1 0
          filteredProducts.sort((a, b) => a.price - b.price);
          break;
        }
        case 'price-highest': {
          filteredProducts.sort((a, b) => b.price - a.price);
          break;
        }
        case 'name-a': {
          //* localeCompare return number indicating string comes before or after
          filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
          break;
        }
        case 'name-z': {
          filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
          break;
        }
        default:
          break;
      }
      return { ...state, filtered_products: filteredProducts };
    }

    case UPDATE_FILTERS: {
      const { name, value } = action.payload;
      return { ...state, filters: { ...state.filters, [name]: value } };
    }

    case FILTER_PRODUCTS: {
      let { all_products: allProduct } = state;

      const { text, category, company, color, price, shipping } = state.filters;

      if (text) {
        allProduct = allProduct.filter((product) =>
          product.name.toLowerCase().includes(text)
        );
      }

      if (category !== 'all') {
        allProduct = allProduct.filter(
          (product) => product.category === category
        );
      }

      if (company !== 'all') {
        allProduct = allProduct.filter(
          (product) => product.company === company
        );
      }

      if (color !== 'all') {
        allProduct = allProduct.filter((product) =>
          product.colors.find((c) => c === color)
        );
      }

      if (price === 0) {
        allProduct = [];
      }

      if (shipping) {
        allProduct = allProduct.filter((product) => product.shipping === true);
      }

      allProduct = allProduct.filter((product) => product.price <= price);

      return { ...state, filtered_products: allProduct };
    }

    case CLEAR_FILTERS: {
      return {
        ...state,
        filters: {
          ...state.filters,
          text: '',
          category: 'all',
          company: 'all',
          color: 'all',
          price: state.filters.max_price,
          shipping: false,
        },
      };
    }

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default filterProductReducer;
