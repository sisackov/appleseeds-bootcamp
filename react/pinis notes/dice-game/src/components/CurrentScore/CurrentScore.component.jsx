import "./current-score.styles.css";
const CurrentScore = ({ score, label }) => {
  return (
    <div className="current-score-container">
      <div className="current-score-label">{label}</div>
      <div className="current-score"> {score}</div>
    </div>
  );
};

export default CurrentScore;
