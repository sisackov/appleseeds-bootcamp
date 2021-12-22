import "./options-container.styles.css";
import Option from "../Option/Option.component";
import React, { Fragment } from "react";
import Input from "../Input/Input.component";
const OptionsContainer = ({
  handlePointsToWin,
  handleDices,
  handleHold,
  handleNewGame,
  winner,
}) => {
  const options = [
    { title: "new game", icon: "add_circle_outline", isDisabled: true },
    { title: "roll dice", icon: "change_circle" },
    { title: "hold", icon: "arrow_downward" },
    { title: "holsssssd", icon: "arrow_downward",}
  ];
  const callbackOption = (title) => {
    switch (title) {
      case "new game":
        return handleNewGame;
      case "roll dice":
        return handleDices;
      case "hold":
        return handleHold;
    }
  };
  const renderOptions = () => {
    return options.map((option, i) => {
      return (
        <Fragment key={i}>
          <Option
            title={option.title}
            icon={option.icon}
            handleCallBack={callbackOption(option.title)}
            winner={winner}
            isDisabled={option.isDisabled}
          />
        </Fragment>
      );
    });
  };

  return (
    <div className="options-container">
      {renderOptions()}
      <Input
        type="number"
        placeholder="final score"
        handlePointsToWin={handlePointsToWin}
      />
    </div>
  );
};
export default OptionsContainer;
