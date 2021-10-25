import React from "react";
//Import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";

const CartItem = ({
  id,
  img,
  model,
  price,
  amount,
  deleteShoeFromCart,
  addAmount,
  subtractAmount,
}) => {

  return (
    <div className="container-cartItem">
      <div className="picture-cartItem">
        <img src={img} alt={model}></img>
      </div>
      <div className="name-cartItem">
        <p>{model}</p>
        <p className="price-cartItem">{price} $</p>
      </div>
      <div className="quantity-cartItem">
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="icon-cartItem"
          onClick={() => {
            subtractAmount(id);
          }}
        />
        <p>{amount}</p>
        <FontAwesomeIcon
          icon={faChevronRight}
          className="icon-cartItem"
          onClick={() => addAmount(id)}
        />
      </div>
      <FontAwesomeIcon
        icon={faWindowClose}
        className="icon-close-cartItem"
        onClick={() => deleteShoeFromCart(id)}
      />
    </div>
  );
};

export default CartItem;
