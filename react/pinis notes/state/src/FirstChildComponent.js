import SecondChildComponent from ".//SecondChildComponent";
const FirstChildComponent = () => {
  console.log("first child is rendering");
  return (
    <div>
      <SecondChildComponent />
    </div>
  );
};
export default FirstChildComponent;
