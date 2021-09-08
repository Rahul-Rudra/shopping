import React from "react";
import { Link } from "react-router-dom";
//import PaypalButton from "./PaypalButton";
function CartTotals({ value,history }) {
  const { cartData, clearCart } = value;
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 col-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
              <button
                className="btn btn-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => clearCart()}
              >
                clear cart
              </button>
            </Link>
            <h5 className="">
              <span className="text-title">subtotal :</span>
              <strong>$ {cartData.cartSubTotal}</strong>
            </h5>
            <h5 className="">
              <span className="text-title">tax :</span>
              <strong>$ {cartData.cartTax}</strong>
            </h5>
            <h5 className="">
              <span className="text-title">total :</span>
              <strong>$ {cartData.cartTotal}</strong>
            </h5>
            {/* <PaypalButton total={cartData.cartTotal} clearCart={clearCart} history={history} /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default CartTotals;
