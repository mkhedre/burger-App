import React from "react";
import "./buildcontrols.css";
import { useSelector } from "react-redux";
import BuildControl from "./buildControl/BuildControl";

const Buildcontrol = () => {
  const controls = useSelector((state) => state.burger.controls);

  return (
    <div className='BuildControls'>
      {controls.map((ctr) => (
        <BuildControl key={ctr.label} label={ctr.label} type={ctr.type} />
      ))}
      <button className='OrderButton'>order</button>
    </div>
  );
};

export default Buildcontrol;
