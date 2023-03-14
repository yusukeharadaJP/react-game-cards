import "./App.css";
import Card from "./components/Card";
import { Deck } from "./common/Constants";

function App() {
  let card = Deck[12]
  return (
    <>
      <Card cardContext={card} isFaceDown={true} />
    </>
  );
}

export default App;
