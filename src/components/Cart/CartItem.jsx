import React from 'react';
import { FaTrash } from 'react-icons/fa';
import Wrapper from './CartItemStyled';
import { formatPrice } from '../../utils/helpers';
import AmountButtons from './AddToCart/AmountButtons';
import { useCartContext } from '../../context/cart_context';

function CartItem({ id, image, name, color, price, amount }) {
  const { removeItem, toggleAmount } = useCartContext();

  return (
    <Wrapper>
      <div className="item">
        <img src={image} alt={name} className="item__img" />
        <div className="item__detail">
          <h5 className="itemName">{name}</h5>
          <p className="itemColor">
            color : <span style={{ background: color }} />
          </p>
          <h5 className="itemPrice">{formatPrice(price)}</h5>
        </div>
      </div>
      <h5 className="price">{formatPrice(price)}</h5>
      <AmountButtons
        amount={amount}
        increase={() => toggleAmount(id, 'inc')}
        decrease={() => toggleAmount(id, 'dec')}
        className="amountBtn"
      />
      <h5 className="subtotal">{formatPrice(price * amount)}</h5>
      <button
        type="button"
        className="removeBtn"
        onClick={() => removeItem(id)}
      >
        <FaTrash />
      </button>
    </Wrapper>
  );
}

export default CartItem;
