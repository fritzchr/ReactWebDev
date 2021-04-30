import { action, makeObservable, observable } from 'mobx';

const API_KEY = 'XdaoZq9JMeywVQvulWH47Yv2ZPAY6AC0';
const BASE_URL = 'https://api.giphy.com/v1/gifs/';
const LIMIT = 13;

export type Gifs = {
    title: string;
    url: string;
};

export class Store {
    @observable gifs: Gifs[];
    @observable currentScreen: string;
    @observable searchString: string;
    @observable isLoading: boolean;
    @observable currentPage: number;

    constructor() {
        makeObservable(this);
        this.gifs = [];
        this.currentScreen = 'Trending';
        this.searchString = '';
        this.isLoading = false;
        this.currentPage = 1;
    }

    @action fetch(): void {
        let url: string;
        if (this.currentScreen !== 'Trending') {
            if (!this.searchString) {
                return;
            }
            //URL to call API for SEARCH request
            url = BASE_URL + `search?api_key=${API_KEY}&limit=${LIMIT}&q=${this.searchString}`;
        } else {
            //URL to call API for TRENDING request
            url = BASE_URL + `trending?api_key=${API_KEY}&limit=${LIMIT}`;
        }

        this.isLoading = true;
        console.log('fetching');
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                this.gifs = json.data.map((item) => {
                    return {
                        url: item.images.fixed_height.url,
                        title: item.title,
                    };
                });
                console.log('after fetch: ' + this.gifs.map((item) => item.title));
                this.isLoading = false;
            })
            .catch((error) => console.log(error));
    }

    @action search(input: string): void {
        this.reset();
        this.searchString = input;
        this.fetch();
    }

    //resets gif storage
    reset(): void {
        this.gifs = [];
    }
}
