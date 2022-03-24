import React, { useState } from "react";
import "./buildcontrols.css";
import { useSelector } from "react-redux";
import BuildControl from "./buildControl/BuildControl";
import Modal from "react-modal";
import OrderSammary from "../orderSummery/OrderSammary";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const Buildcontrol = () => {
  const controls = useSelector((state) => state.burger.controls);
  const [isopen, setopen] = useState(false);
  return (
    <div className='BuildControls'>
      {controls.map((ctr) => (
        <BuildControl key={ctr.label} label={ctr.label} type={ctr.type} />
      ))}
      <button className='OrderButton' onClick={() => setopen(true)}>
        order
      </button>
      <Modal
        closeTimeoutMS={200}
        className='Modal'
        overlayClassName='Overlay'
        isOpen={isopen}
        onRequestClose={() => setopen(false)}
        style={customStyles}
        contentLabel='example modal'
      >
        <div className='head'>
          <h1>starter</h1>
          <button
            type='button'
            className='close'
            data-dismiss='modal'
            aria-label='Close'
            onClick={() => setopen(false)}
          >
            <span aria-hidden='true'>&times;</span>
          </button>
        </div>

        <OrderSammary />
      </Modal>
    </div>
  );
};

export default Buildcontrol;
