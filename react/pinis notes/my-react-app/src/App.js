import Card from "./Card";
function App() {
  const data = [
    { title: "MyTitle", description: "My Description" },
    { title: "MyTitle2", description: "My Description2" },
    { title: "MyTitle3", description: "My Description3" },
  ];
  const displayCards = () => {
    return data.map((card) => {
      return <Card title={card.title} description={card.description} />;
    });
  };
  return (
    <div>
      {displayCards()}
      {/* not good practice above. Don't polute your jsx with iterations */}
      {/* {data.map((card) => {
        return <Card title={card.title} description={card.description} />;
      })} */}
    </div>
  );
}

export default App;
