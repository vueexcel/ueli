import Vue from "vue";

export const searchResultsComponent = Vue.extend({
    data() {
        return {
            containerId: "search-result-container",
            isLoading: false,
            searchResults: [
                {
                    itemId: 1,
                    active: true,
                    iconUrl: {type: "URL", parameter : 'https://icon-library.com/images/facebook-icon-50x50/facebook-icon-50x50-2.jpg'},
                    title: 'Article One',
                    description: `It is a long eastablished fact that a reader will be distracted
                    by the readable content of a page when looking at it's layout.`
                },
                {
                    itemId: 2,
                    active: false,
                    iconUrl: {type: "URL", parameter : 'https://icon-library.com/images/facebook-icon-50x50/facebook-icon-50x50-2.jpg'},
                    title: 'Article One',
                    description: `It is a long eastablished fact that a reader will be distracted
                    by the readable content of a page when looking at it's layout.`
                },
                {
                    itemId: 3,
                    active: false,
                    iconUrl: {type: "URL", parameter : 'https://icon-library.com/images/facebook-icon-50x50/facebook-icon-50x50-2.jpg'},
                    title: 'Article One',
                    description: `It is a long eastablished fact that a reader will be distracted
                    by the readable content of a page when looking at it's layout.`
                },
                {
                    itemId: 4,
                    active: false,
                    iconUrl: {type: "URL", parameter : 'https://icon-library.com/images/facebook-icon-50x50/facebook-icon-50x50-2.jpg'},
                    title: 'Article One',
                    description: `It is a long eastablished fact that a reader will be distracted
                    by the readable content of a page when looking at it's layout.`
                }
            ]
        };
    },
    methods: {
        setIsLoading(value: boolean) {
            this.isLoading = value;
        }
    },
    props: ["appearance"],
    template: `
        <div class="search-results" :class="{ 'scroll-disabled' : isLoading }" :id="containerId">
            <div class="search-results__container">
                <search-categories :appearance="appearance" @setLoading="setIsLoading"></search-categories>
                <search-results-panel :searchingResults="searchResults"/>
                <search-preview />
            </div>
            <div v-if="isLoading" class="search-results__overlay"></div>
        </div>
    `,
});
