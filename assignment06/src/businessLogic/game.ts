import { Deck } from './deck';
import { Card } from './card';

export class Game {
    deck: Deck;
    currentCard: Card;
    index: number;
    score: number;

    constructor() {
        this.deck = new Deck();
        this.index = 0;
        this.score = 0;
        this.currentCard = this.deck.card(this.index);
    }

    drawNextCard(prediction: string): void {
        const previousCard = this.currentCard;
        this.index++;
        this.currentCard = this.deck.card(this.index);

        if (prediction === 'higher') {
            if (previousCard.getCardValue() < this.currentCard.getCardValue()) {
                this.score++;
            }
        } else if (prediction === 'lower') {
            if (previousCard.getCardValue() > this.currentCard.getCardValue()) {
                this.score++;
            }
        }
    }

    isGameOver(): boolean {
        if (!this.deck.card(this.index + 1)) {
            return true;
        }
        return false;
    }
}