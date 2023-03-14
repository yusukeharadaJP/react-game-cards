import { Suits } from "../common/Constants";
import { CardContext } from "../@types/playing-card"

export const shuffleCards = (Deck: CardContext[]) => {
	for (let i = Deck.length - 1; i >= 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[Deck[i], Deck[j]] = [Deck[j], Deck[i]];
	}
	return Deck;
};


export const getCardStyleFromSuit = (suit: String) => {
	if (suit === Suits.diamond || suit === Suits.heart) {
		return "card__textred";
	} else if (suit === Suits.spade || suit === Suits.club) {
		return "card__textblack";
	}
	return "";
};

export const getCardString = (cardNumber: Number) => {
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