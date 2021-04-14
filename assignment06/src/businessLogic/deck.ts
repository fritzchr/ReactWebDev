/* eslint-disable @typescript-eslint/no-var-requires */
import { Card, Image } from './card';

export class Deck {
    cards: Array<Card>;
    suits: Array<Image>

    constructor() {
        const heart = require('../../resources/heart.png').default;
        const diamond = require('../../resources/diamond.png').default;
        const spade = require('../../resources/spade.png').default;
        const club = require('../../resources/club.png').default;

        this.cards = [];
        this.suits = [
            heart,
            diamond,
            spade,
            club
        ];

        //testing purposes - implement later
        for(let i = 0; i < 4; i++) {
            this.cards.push(new Card(heart, i.toString()));
        }
    }
}