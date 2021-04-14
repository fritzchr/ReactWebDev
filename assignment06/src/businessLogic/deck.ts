import { Card, Image } from './card';

export class Deck {
    cards: Array<Card>;
    suits: Array<Image>

    constructor() {
        this.cards = [];
        this.suits = [];
        this.setUpSuits();

        //fill cards array with all cards
        for(let i = 0; i < 4; i++) {
            for(let j = 2; j < 15; j++) {
                let value = '';
                switch (j) {
                    case 11:
                        value = 'J';
                        break;
                    case 12:
                        value = 'Q';
                        break;
                    case 13:
                        value = 'K';
                        break;
                    case 14:
                        value = 'A';
                        break;
                    default:
                        value = j.toString();
                }
                this.cards.push(new Card(this.suits[i], value));
            }
        }
        this.shuffleArray(this.cards);
    }

    card(index: number): Card {
        return this.cards[index];
    }

    setUpSuits(): void {
        this.suits = [
            {
                path: require('../assets/heart.png'),
                name: 'hearts'
            },
            {
                path: require('../assets/diamond.png'),
                name: 'diamonds'
            },
            {
                path: require('../assets/spade.png'),
                name: 'spades'
            },
            {
                path: require('../assets/club.png'),
                name: 'clubs'
            }
        ];
    }

    //Durstenfeld shuffle algorithm - https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
    shuffleArray(array: Card[]): void {
        for (let i = array.length -1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}