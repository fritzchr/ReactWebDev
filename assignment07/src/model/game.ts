import { Deck } from './deck';
import { Card } from './card';
import { action, makeObservable, observable } from 'mobx';

export class Game {
    deck: Deck;
    @observable currentCard: Card;
    @observable index: number;
    @observable score: number;

    constructor() {
        makeObservable(this);
        this.deck = new Deck();
        this.index = 0;
        this.score = 0;
        this.currentCard = this.deck.card(this.index);
    }

    @action drawNextCard(prediction: string): void {
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

    @action isGameOver(): boolean {
        if (!this.deck.card(this.index + 1)) {
            return true;
        }
        return false;
    }
}