import React from "react";
import { useDispatch } from "react-redux";
import { addslice, deleteSlice } from "../../../../features/BurgerSlice";
import "./buildControl.css";

const BuildControl = (props) => {
  const dispatch = useDispatch();
  return (
    <div className='BuildControl'>
      <p className='Label'>{props.label}</p>
      <button
        className='Less'
        onClick={() => dispatch(deleteSlice(props.type))}
        disabled={props.disable}
      >
        Less
      </button>
      <button className='More' onClick={() => dispatch(addslice(props.type))}>
        more
      </button>
    </div>
  );
};

export default BuildControl;
