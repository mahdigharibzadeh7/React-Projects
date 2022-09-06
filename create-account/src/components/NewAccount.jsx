import React from "react";
import NavBar from "./NavBar";
import Text from "./Text";
import Form from "./Form";
import Buttons from "./Buttons";
import Modal from "./Modal";

import "./componentsStyle/NewAccount.css";

const buttons = [
  { cName: "change-method", inButton: "Change method" },
  { cName: "create-account", inButton: "Create account" },
];

const NewAccount = () => {
  
  const modal = () => {
    
  }

  return (
    <div className="container">
      <Modal state={modalState} />
      <div className="create-new-account">
        <div className="wrapper">
          <NavBar />
          <Text />
          <Form />
          <div className="btns">
            {buttons.map((btn) => {
              return (
                <Buttons
                  key={btn.inButton}
                  cName={btn.cName}
                  inButton={btn.inButton}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAccount;
