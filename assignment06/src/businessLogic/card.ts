export type Image = {
    path: string;
};

export class Card {
    suit: Image;
    value: string;

    constructor(suit: Image, value: string) {
        this.suit = suit;
        this.value = value;
    }
}
