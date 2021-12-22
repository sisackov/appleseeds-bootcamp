import "./custom-button.css";
const CustomButton = ({ title, onHandleClick }) => {
  return (
    // *im calling the function here which in will get invoked from my father
    <button onClick={() => onHandleClick("hello")} className="custom-button">
      {title}
    </button>
  );
};
export default CustomButton;
