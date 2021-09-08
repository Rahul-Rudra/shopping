import React, { createContext, useEffect, useState } from "react";
import { storeProducts, detailProduct } from "./data";

export const ProductContext = createContext();

function ProductProvider(props) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [detailProducts, setDetailProducts] = useState(detailProduct);
  const [openModal, setOpenModal] = useState(false);
  const [modalProduct, setModalProduct] = useState(detailProducts);
  const [cartData, setCartData] = useState({
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  });

  const handleProducts = () => {
    let temPproducts = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      temPproducts = [...temPproducts, singleItem];
    });
    setProducts(temPproducts);
  };
  useEffect(() => {
    handleProducts();
    setDetailProducts(detailProduct);
  }, []);

  const getItem = (id) => {
    let product = products.find((item) => item.id === id);
    return product;
  };

  const handleDetail = (id) => {
    let product = getItem(id);
    setDetailProducts(product);
  };

  const addToCart = async (id) => {
    let temp = [...products];
    const index = temp.indexOf(getItem(id));
    const product = temp[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    setProducts(temp);
    setCart([...cart, product]);
  };

  useEffect(() => {
    const addTotals = () => {
      let subtotal = 0;
      cart && cart.map((item) => (subtotal += item.total));
      const tempTax = subtotal * 0.1;
      const tax = parseFloat(tempTax.toFixed(2));
      const total = subtotal + tax;
      setCartData({
        cartSubTotal: subtotal,
        cartTax: tax,
        cartTotal: total,
      });
    };
    addTotals();
  }, [cart]);

  const Modal = (id) => {
    let product = getItem(id);
    setModalProduct(product);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const increment = (id) => {
    let tempCart = [...cart];
    let selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count += 1;
    product.total = product.price * product.count;
    setCart([...tempCart]);
  };
  const decrement = (id) => {
    let tempCart = [...cart];
    let selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count -= 1;
    if (product.count === 0) {
      removeItem(id);
    } else {
      product.total = product.price * product.count;
      setCart([...tempCart]);
    }
  };

  const removeItem = (id) => {
    let tempProducts = [...products];
    let tempCart = [...cart];
    tempCart = tempCart.filter((item) => item.id !== id);
    const index = tempProducts.indexOf(getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    setCart([...tempCart]);
    setProducts([...tempProducts]);
  };

  const clearCart = () => {
    setCart([]);
    handleProducts();
  };

  // const addTotals = () => {
  //   let subtotal = 0;
  //   cart && cart.map((item) => (subtotal += item.total));
  //   const tempTax = subtotal * 0.1;
  //   const tax = parseFloat(tempTax.toFixed(2));
  //   const total = subtotal + tax;
  //   setCartData({
  //     cartSubTotal: subtotal,
  //     cartTax: tax,
  //     cartTotal: total,
  //   });
  // };
  return (
    <>
      <ProductContext.Provider
        value={{
          products,
          setProducts,
          addToCart,
          handleDetail,
          detailProducts,
          setDetailProducts,
          cart,
          setCart,
          modalProduct,
          setModalProduct,
          openModal,
          setOpenModal,
          Modal,
          closeModal,
          increment,
          decrement,
          removeItem,
          clearCart,
          cartData,
          setCartData,
        }}
      >
        {props.children}
      </ProductContext.Provider>
    </>
  );
}

export default ProductProvider;
