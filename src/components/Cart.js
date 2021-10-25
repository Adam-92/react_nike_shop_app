import React from "react";
//Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
//Import global context
import { useGlobalContext } from "../context/Context";
//Import component
import CartItemContainer from "./CartItemContainer";

const Cart = () => {
  const { openCart, setOpenCart } = useGlobalContext();

  return (
    <aside className={`container-cart ${openCart && "show-cart"}`}>
      <div className="content-cart">
        <h1 className="summary-cart">SUMMARY</h1>
        <FontAwesomeIcon
          icon={faSignOutAlt}
          className="icon-close-cart"
          onClick={() => setOpenCart(false)}
        />
        <CartItemContainer />
      </div>
    </aside>
  );
};

export default Cart;
