import { Suits } from "./Deck";
import { CardContext } from "../@types/index";

const getCardStyleFromSuit = (suit: String) => {
	if (suit === Suits.diamond || suit === Suits.heart) {
		return "card__textred";
	} else if (suit === Suits.spade || suit === Suits.club) {
		return "card__textblack";
	}
	return "";
};

const getCardString = (cardNumber: Number) => {
	switch (cardNumber) {
		case 11:
			return "J";
		case 12:
			return "Q";
		case 13:
			return "K";
		default:
			return String(cardNumber);
	}
};

export const Card = ({ cardContext }: { cardContext: CardContext }) => {
	return (
		<>
			<div className={"card " + (cardContext.isFaceDown ? "" : "facedown")}>
				{cardContext.isFaceDown && (
					<>
						<p className={getCardStyleFromSuit(cardContext.suit)}>
							{getCardString(cardContext.number)}
						</p>
						<p className={getCardStyleFromSuit(cardContext.suit)}>
							{cardContext.suit}
						</p>
					</>
				)}
			</div>
		</>
	);
};

export default Card;
