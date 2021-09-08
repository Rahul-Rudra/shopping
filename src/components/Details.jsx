import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import { ProductContext } from "../Context";
export default function Details(props) {
  // const detail = useContext(ProductContext);
  //const [detailProducts, setDetailProducts] = useContext(ProductContext);
  const fun = useContext(ProductContext);
  const { id, title, info, price, img, inCart, company } = fun.detailProducts;
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
            <h1>{title}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
            <img src={img} alt="product" />
          </div>
          <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
            <h1>model:{title}</h1>
            <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
              made by:<span className="text-uppercase">{company}</span>
            </h4>
            <h4 className="text-blue">
              price:<span>$</span>
              {price}
            </h4>
            <p className="text-capitalize font-weight-bold mt-3 mb-0">
              some info about product:
            </p>
            <p className="text-muted lead">{info}</p>
            <Link to="/" className="m-2">
              <ButtonContainer>back to products</ButtonContainer>
            </Link>

            <ButtonContainer
              cart
              disabled={inCart ? true : false}
              //  onClick={() => fun.addToCart(id)}
              onClick={() => {
                fun.addToCart(id);
                fun.Modal(id);
              }}
            >
              {inCart ? "in Cart" : "Add to cart"}
            </ButtonContainer>
          </div>
        </div>
      </div>
    </>
  );
}
