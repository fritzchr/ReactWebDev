import { action, computed, makeObservable, observable } from 'mobx';

const API_KEY = 'XdaoZq9JMeywVQvulWH47Yv2ZPAY6AC0';
const BASE_URL = 'https://api.giphy.com/v1/gifs/';
const DISPLAY_LIMIT = 15;

type Gifs = {
    title: string;
    url: string;
};

export class Store {
    @observable gifs: Gifs[];
    @observable currentScreen: string;
    @observable searchString: string;
    @observable isLoading: boolean;
    @observable currentPage: number;
    @observable maxPage: number;

    constructor() {
        makeObservable(this);
        this.gifs = [];
        this.currentScreen = 'Trending';
        this.searchString = '';
        this.isLoading = false;
        this.currentPage = 0;
        this.maxPage = 0;
    }

    //invokes api call
    @action fetch(): void {
        let url: string;
        if (this.currentScreen !== 'Trending') {
            if (!this.searchString) {
                return;
            }
            //URL to call API for SEARCH request
            url = BASE_URL + `search?api_key=${API_KEY}&limit=${DISPLAY_LIMIT}&offset=${this.currentPage * DISPLAY_LIMIT}&q=${this.searchString}`;
        } else {
            //URL to call API for TRENDING request
            url = BASE_URL + `trending?api_key=${API_KEY}&limit=${DISPLAY_LIMIT}&offset=${this.currentPage * DISPLAY_LIMIT}`;
        }

        this.isLoading = true;
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                this.gifs = json.data.map((item) => {
                    return {
                        title: item.title,
                        url: item.images.fixed_height.url,
                    };
                });

                const amountOfPages = json.pagination.total_count;
                this.maxPage = parseInt((amountOfPages / DISPLAY_LIMIT).toFixed(0));
                this.isLoading = false;
            })
            .catch((error) => {
                this.reset();
                console.log(error)
            });
    }

    //is used to search for gifs
    @action search(input: string): void {
        this.reset();
        this.searchString = input;
        this.fetch();
    }

    //is used to navigate between screens
    @action changeScreen(screen: string): void {
        if (this.currentScreen !== screen) {
            this.reset();
            this.searchString = '';
            this.currentScreen = screen;
        }
    }

    //is used to navigate between pages
    @action setPage(page: number): void {
        if (page < 0) {
            this.currentPage = 0;
        } else {
            this.currentPage = page;
        }
    }

    //returns current page number + 1 to correctly display
    @computed get getCurrentPageNumber(): string {
        return (this.currentPage + 1).toString();
    }

    //is used to reset stored gifs and number of pages
    reset(): void {
        this.gifs = [];
        this.currentPage = 0;
        this.maxPage = 0;
    }
}
