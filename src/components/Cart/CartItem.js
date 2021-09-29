import React from "react";
import styled from "styled-components";
import { Wrapper } from "./CartItemStyled";
import { FaTrash } from "react-icons/fa";
import { formatPrice } from "../../utils/helpers";
import AmountButtons from "./AmountButtons";
import { useCartContext } from "../../hooks/context/cart_context";

function CartItem({ id, image, name, color, price, amount }) {
  const { removeItem, toggleAmount } = useCartContext();

  const increase = () => {
    toggleAmount(id, "inc");
  };

  const decrease = () => {
    toggleAmount(id, "dec");
  };

  return (
    <Wrapper>
      <div className="item">
        <img src={image} alt={name} className="item__img" />
        <div className="item__detail">
          <h5 className="itemName">{name}</h5>
          <p className="itemColor">
            color : <span style={{ background: color }}></span>
          </p>
          <h5 className="itemPrice">{formatPrice(price)}</h5>
        </div>
      </div>
      <h5 className="price">{formatPrice(price)}</h5>
      <AmountButtons
        amount={amount}
        increase={increase}
        decrease={decrease}
        className="amountBtn"
      />
      <h5 className="subtotal">{formatPrice(price * amount)}</h5>
      <button
        type="button"
        className="removeBtn"
        onClick={() => removeItem(id)}>
        <FaTrash />
      </button>
    </Wrapper>
  );
}

export default CartItem;
