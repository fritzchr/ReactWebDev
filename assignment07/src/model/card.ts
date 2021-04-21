export type Image = {
    path: string;
    name: string;
};

export class Card {
    suit: Image;
    value: string;

    constructor(suit: Image, value: string) {
        this.suit = suit;
        this.value = value;
    }

    getCardValue(): number {
        switch (this.value) {
            case 'J':
                return 11;
            case 'Q':
                return 12;
            case 'K':
                return 13;
            case 'A':
                return 14;
            default:
                return parseInt(this.value);
        }
    }
}
