import React from "react";
import { useSelector } from "react-redux";
import "./orderSummer.css";
const OrderSammary = () => {
  const order = useSelector((state) => state.burger.ingrediants);
  const oderSummry = Object.keys(order).map((igkey, index) => (
    <li key={index}>
      <span> {igkey}</span> : {order[igkey]}
    </li>
  ));
  return (
    <div className='ordersummery'>
      <h3>your order</h3>
      <p>a delicious order with the following ingrediants :</p>
      <ul>{oderSummry}</ul>
    </div>
  );
};

export default OrderSammary;
