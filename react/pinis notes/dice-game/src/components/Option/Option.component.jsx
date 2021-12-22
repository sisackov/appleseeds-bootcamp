import "./option.styles.css";
const Option = ({ title, icon, handleCallBack, winner, isDisabled }) => {
  return (
    <button
      disabled={isDisabled ? false : winner}
      onClick={handleCallBack}
      className="option-container"
    >
      <span className="material-icons">{icon}</span>
      {title}
    </button>
  );
};
export default Option;
