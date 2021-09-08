import React from "react";
import CartItem from "./CartItem";

function CartList({ data }) {
  const { cart } = data;
  return (
    <>
      {cart &&
        cart.map((u, i) => {
          return <CartItem key={u.id} item={u} value={data} />;
        })}
    </>
  );
}

export default CartList;
