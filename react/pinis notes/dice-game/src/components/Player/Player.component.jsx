import "./player.styles.css";
import CurrentScore from "../CurrentScore/CurrentScore.component";
import GlobalScore from "../GlobalScore/GlobalScore.component";
const Player = ({
  playerData: { currentScore, globalScore },
  player,
  playersTurn,
  winner,
  ...props
}) => {
  const isPlayer = player === playersTurn;
  const activeStyle = isPlayer ? "active" : "";
  const playerName = isPlayer && winner ? "WINNER!!!" : `player ${player + 1}`;
  return (
    <div className={`player-container ${activeStyle}`}>
      <div className={`player-name ${activeStyle}`}>{playerName} </div>
      <GlobalScore score={globalScore} />
      <CurrentScore score={currentScore} label="current" />
    </div>
  );
};
export default Player;
