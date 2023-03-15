import PlayingCard from "./components/PlayingCard";
import { PlayingCardDeck } from "./common/Constants";

function App() {
  let card = PlayingCardDeck[12]
  return (
    <>
      <PlayingCard cardContext={card} isFaceDown={true} />
    </>
  );
}

export default App;
