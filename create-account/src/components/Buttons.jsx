import React, { useState } from "react";
import Modal from "./Modal";

const Buttons = (props) => {
  const [modalState, setModalState] = useState(false);
  const btnHandler = () => {
    setModalState(!modalState);
  };
  return (
    <button onClick={btnHandler} className={props.cName}>
      {props.inButton}
      {/* <Modal /> */}
    </button>
  );
};

export default Buttons;
