import React, { useState } from "react";
import "./burIngrediant.css";
const BurIngrediant = (props) => {
  const [ingrediant, setingrediant] = useState("bread-top");
  switch (props.type) {
    case "bread-bottom":
      return <div className='BreadBottom'></div>;
    case "bread-top":
      return (
        <div className='BreadTop'>
          <div className='Seeds1'></div>
          <div className='Seeds2'></div>
        </div>
      );
    case "meat":
      return <div className='Meat'></div>;

    case "cheese":
      return <div className='Cheese'></div>;

    case "bacon":
      return <div className='Bacon'></div>;

    case "salad":
      return <div className='Salad'></div>;
  }
};

export default BurIngrediant;
