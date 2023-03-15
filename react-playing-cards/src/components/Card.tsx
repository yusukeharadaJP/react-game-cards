import { CardContext } from "../types/index";
import { getCardStyleFromSuit, getCardString } from "../common/CardFunctions";
import "../style/Card.css";

type CardProps = {
	cardContext: CardContext, isFaceDown: boolean
}

export const Card = ({ cardContext, isFaceDown }: CardProps) => {
	return (
		<>
			<div className={"card " + (isFaceDown ? "" : "card--facedown")}>
				{isFaceDown && (
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
