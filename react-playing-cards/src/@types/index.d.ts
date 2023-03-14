// / <reference types="react" />
export interface Table {
  stock: CardInfo[];
  foundation_diamond: CardInfo[];
  foundation_club: CardInfo[];
  foundation_spade: CardInfo[];
  foundation_heart: CardInfo[];
  piles: CardInfo[][];
}
export declare const Suits: {
  diamond: string;
  club: string;
  spade: string;
  heart: string;
};
export interface CardContext {
  suit: String;
  number: Number;
  isFaceDown: Boolean;
}
