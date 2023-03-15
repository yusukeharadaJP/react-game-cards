import Card from "./components/Card";
import { PlayingCardDeck } from "./common/Constants";

function App() {
  let card = PlayingCardDeck[12]
  return (
    <>
      <Card cardContext={card} isFaceDown={true} />
    </>
  );
}

export default App;
