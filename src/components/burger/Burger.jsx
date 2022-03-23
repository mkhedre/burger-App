import React from "react";
import { useSelector } from "react-redux";
import BurIngrediant from "./burgerIngrediant/BurIngrediant";
const Burger = () => {
  const type = useSelector((state) => state.burger.ingrediants);
  const numOfIngrediants = Object.keys(type).map((key) => {
    return [...Array(type[key])].map((_, i) => (
      <BurIngrediant key={key + i} type={key} />
    ));
  });
  return (
    <div>
      <BurIngrediant type='bread-top' />
      {numOfIngrediants}

      <BurIngrediant type='bread-bottom' />
    </div>
  );
};

export default Burger;
