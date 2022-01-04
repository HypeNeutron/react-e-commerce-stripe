import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../../actions';

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { id, color, amount, product } = action.payload;

      const IDItem = id + color;
      const duplicateProductColor = state.cart.find((s) => s.id === IDItem);

      if (duplicateProductColor) {
        const plusAmount = state.cart.map((item) => {
          if (item.id === IDItem) {
            let newAmount = item.amount + amount;

            if (newAmount > item.stock) {
              newAmount = item.stock;
            }
            return { ...item, amount: newAmount };
          }
          return item;
        });
        return { ...state, cart: plusAmount };
      }

      const addItem = {
        id: IDItem,
        name: product.name,
        color,
        amount,
        image: product.images[0].url,
        price: product.price,
        stock: product.stock,
      };

      return { ...state, cart: [...state.cart, addItem] };
    }

    case REMOVE_CART_ITEM: {
      const delCart = state.cart.filter((item) => item.id !== action.payload);
      return { ...state, cart: delCart };
    }

    case CLEAR_CART: {
      return { ...state, cart: [] };
    }

    case TOGGLE_CART_ITEM_AMOUNT: {
      const { id, value } = action.payload;

      const data = state.cart.map((item) => {
        if (item.id === id) {
          switch (value) {
            case 'inc': {
              let newAmount = item.amount + 1;
              if (newAmount > item.stock) {
                newAmount = item.stock;
              }
              return { ...item, amount: newAmount };
            }
            case 'dec': {
              let newAmount = item.amount - 1;
              if (newAmount < 1) {
                newAmount = 1;
              }
              return { ...item, amount: newAmount };
            }
            default:
              break;
          }
        }
        return item;
      });

      return { ...state, cart: data };
    }

    case COUNT_CART_TOTALS: {
      const { total_items: totalItems, total_amount: totalAmount } =
        state.cart.reduce(
          (acc, cartItem) => {
            const { amount, price } = cartItem;
            const multipleTotal = price * amount;
            acc.total_items += amount;
            acc.total_amount += multipleTotal;
            return acc;
          },
          { total_items: 0, total_amount: 0 }
        );

      return { ...state, total_items: totalItems, total_amount: totalAmount };
    }

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default cartReducer;
