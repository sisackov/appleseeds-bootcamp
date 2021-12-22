import "./dice.styles.css";
import React, { Fragment } from "react";

const Dice = ({ dices }) => {
  const renderDices = () => {
    if (dices[0]) {
      const value = dices.map((die, i) => {
        return (
          <Fragment key={i}>
            <img
              src={require(`../../assets/images/dice-${die}.png`).default}
              alt="die"
            />
          </Fragment>
        );
      });
      return value;
    }
  };

  return <div className="dice-container"> {renderDices()}</div>;
};
export default Dice;
