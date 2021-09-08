import React, { useContext } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductContext } from "../Context";
export default function ProductList() {
  const products= useContext(ProductContext);
  return (
    <>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="products" />
          
          <div className="row">
            {products &&
              products?.products.map((u, i) => <Product product={u} key={u.id} />)}
          </div>
        </div>
      </div>
      {/* <Product /> */}
    </>
  );
}
