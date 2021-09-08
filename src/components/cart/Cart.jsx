import React, { useContext } from "react";
import { ProductContext } from "../../Context";
import Title from "../Title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import EmptyCart from "./EmptyCart";
export default function Cart() {
  const data = useContext(ProductContext);
  const { cart } = data;

  return (
    <>
      <section>
        {cart.length > 0 ? (
          <>
            <Title name="your" title="cart" />
            <CartColumns />
            <CartList data={data} />
            <CartTotals value={data} />
          </>
        ) : (
          <EmptyCart />
        )}
      </section>
    </>
  );
}
