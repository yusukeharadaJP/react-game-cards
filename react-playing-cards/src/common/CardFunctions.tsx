import { Deck } from "../common/Constants";
import { CardContext } from "../@types/index";
import { Table } from "../@types/index";

export const dealCards = () => {
	let cardCount = 0;
	const stockCard = 24;

	let cards: CardContext[] = shuffleCards(Deck);

	let tmpStock: any = [];
	while (cardCount < stockCard) {
		tmpStock[cardCount] = cards[cardCount];
		tmpStock[cardCount].isCardOpen = true;
		cardCount++;
	}

	let tmpPiles: any[] = [[], [], [], [], [], [], []];
	for (let i = 0; i < 7; i++) {
		for (let j = 0; j < i + 1; j++) {
			tmpPiles[i][j] = cards[cardCount];
			if (j === i) {
				tmpPiles[i][j].isCardOpen = true;
			} else {
				tmpPiles[i][j].isCardOpen = false;
			}
			cardCount++;
		}
	}

	let table: Table = {
		stock: tmpStock,
		foundation_diamond: [],
		foundation_club: [],
		foundation_spade: [],
		foundation_heart: [],
		piles: tmpPiles,
	};

	return table;
};

const shuffleCards = (Deck: CardContext[]) => {
	for (let i = Deck.length - 1; i >= 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[Deck[i], Deck[j]] = [Deck[j], Deck[i]];
	}
	return Deck;
};
