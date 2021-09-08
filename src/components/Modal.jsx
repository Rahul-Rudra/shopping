import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import { ProductContext } from "../Context";
export default function Modal(props) {
  let data = useContext(ProductContext);
  const { openModal, closeModal, modalProduct } = data;
  const { title, price,img } = modalProduct;
  if (!openModal) {
    return null;
  } else {
    return (
      <>
        <ModalContainer>
          <div className="container">           
            <div className="row">
              <div
                id="modal"
                className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize"
              >
                <h5 className="mt-5">item added to the cart</h5>
                <img src={img} alt="product" className="img-fluid" />
                <h5>{title}</h5>
                <h5 className="text-muted">price: ${price}</h5>
                <Link to="/" >
                  <ButtonContainer onClick={() => closeModal()}>
                    continue shopping
                  </ButtonContainer>
                </Link>
                <Link to="/store" className="ml-2">
                  <ButtonContainer cart onClick={() => closeModal()}>
                    go to cart
                  </ButtonContainer>
                </Link>
              </div>
            </div>
          </div>
        </ModalContainer>
      </>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;
