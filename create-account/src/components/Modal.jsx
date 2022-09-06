import React from "react";

const Modal = (props) => {
  return !props.state ? (
    ""
  ) : (
    <div className="bg-white text-black w-full text-lg">hello</div>
  );
};

export default Modal;
