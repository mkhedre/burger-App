import React from "react";
import { useSelector } from "react-redux";
import Buildcontrols from "./buildcontrols/Buildcontrols";
import BurIngrediant from "./burgerIngrediant/BurIngrediant";
const Burger = () => {
  const type = useSelector((state) => state.burger.ingrediants);
  const price = useSelector((state) => state.burger.ingrediantPrice);

  // for (let key in disabledInfo) {
  //   disabledInfo[key] = disabledInfo[key] <= 0;
  // }

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
      <Buildcontrols />
    </div>
  );
};

export default Burger;
