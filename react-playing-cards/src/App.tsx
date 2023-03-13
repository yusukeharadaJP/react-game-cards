import "./App.css";
import Card from "./components/Card";
import { Deck } from "./common/Constants";

function App() {
	let card = Deck[12]
	card.isFaceDown = true
	return (
		<>
			<Card cardContext={card} />
		</>
	);
}

export default App;
