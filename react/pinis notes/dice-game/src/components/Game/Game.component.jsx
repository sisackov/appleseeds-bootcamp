import React, { Fragment,Component } from "react";
import "./game.styles.css";

import Player from "../Player/Player.component";
import OptionsContainer from "../OptionsContainer/OptionsContainer.component";
import Dice from "../Dice/Dice.component";

import { defaultArr, nextTurn } from "../../utils/helperFunctions";

class Game extends Component {
  state = {
    pointsToWin: 100,
    dices: [null, null],
    playersTurn: 0,
    winner: false,
    players: [
      {
        currentScore: 0,
        globalScore: 0,
      },
      {
        currentScore: 0,
        globalScore: 0,
      },
    ],
  };

  handleDices = () => {
    const { players, playersTurn } = this.state;
    const diceValues = this.state.dices.map((_) => {
      return Math.floor(Math.random() * 6) + 1;
    });

    const playersObj = [...players];

    playersObj[playersTurn].currentScore += diceValues.reduce(
      (val, acc) => val + acc
    );

    const doubles = diceValues.every((die) => die === diceValues[0]);
    if (doubles) {
      playersObj[playersTurn].currentScore = 0;

      return this.setState({
        playersTurn: nextTurn(playersTurn, players.length - 1),
        dices: defaultArr(this.state.dices.length, null),
        playersObj,
      });
    }

    this.setState({ dices: [...diceValues], playersObj });
  };

  handleHold = () => {
    const { players, playersTurn, pointsToWin } = this.state;
    const playersObj = [...players];

    playersObj[playersTurn].globalScore += playersObj[playersTurn].currentScore;

    players[playersTurn].currentScore = 0;
   

    if (playersObj[playersTurn].globalScore >= pointsToWin) {
      return this.setState({
        playersObj,
        winner: true,
        dices: defaultArr(this.state.dices.length, null),
      });
    }
    this.setState({
      playersObj,
      playersTurn: nextTurn(playersTurn, players.length - 1),
      dices: defaultArr(this.state.dices.length, null),
    });
  };

  handleNewGame = () => {
    this.setState({
      dices: defaultArr(this.state.dices.length, null),
      playersTurn: 0,
      winner: false,
      players: [
        {
          currentScore: 0,
          globalScore: 0,
          wins: 0,
        },
        {
          currentScore: 0,
          globalScore: 0,
          wins: 0,
        },
      ],
    });
  };

  handlePointsToWin = (values) => {
    console.log(values);
    this.setState({ pointsToWin: values });
  };

  render() {
    const renderPlayers = () => {
      const { playersTurn, winner,players } = this.state;
      return players.map((player, i) => {
        return (
          <Fragment key={i}>
            < Player
              playerData={player}
              player={i}
              playersTurn={playersTurn}
              winner={winner}
            />
          </Fragment>
        );
      });
    };

    return (
      <div className="game-container">
        {renderPlayers()}
        <OptionsContainer
          handlePointsToWin={this.handlePointsToWin}
          handleDices={this.handleDices}
          handleHold={this.handleHold}
          handleNewGame={this.handleNewGame}
          winner={this.state.winner}
        />
        <Dice dices={this.state.dices} />
      </div>
    );
  }
}
export default Game;
