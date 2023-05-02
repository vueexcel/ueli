import Vue from "vue";
import { Icon } from "../common/icon/icon";
import { IconType } from "../common/icon/icon-type";

export const searchResultsPanel = Vue.extend({
    props: ["searchingResults"],
    data() {
        return {
            containerId: "search-result-container",
            isLoading: false,
        };
    },
    methods: {
        getIcon(icon: Icon, active: boolean) {
            const activeClass = active ? "active" : "";
            switch (icon.type) {
                case IconType.URL:
                    return `<img class="search-categories__item-icon--url ${activeClass}" src="${icon.parameter}">`;
                case IconType.SVG:
                    return `<div class="search-categories__item-icon--svg ${activeClass}">${icon.parameter}</div>`;
                case IconType.Color:
                    return `<div class="search-categories__item-icon--color" style="background-color: ${icon.parameter};"></div>`;
            }
          },
    },
    template: `
                <div class="search-results-pannel">
                    <div class="search-results__item" :class="{ 'active' : result.active }" v-for="(result, index) in searchingResults" :key="index">
                        <div class="search-results-item-icon-container" :class="{ 'active' : result.active }">
                            <div class="search-results__item-icon" v-html="getIcon(result.iconUrl, result.active)"></div>
                        </div>
                        <div class="search-results-item-info-container">
                            <div class="search-results__item-title" :class="{ 'active' : result.active }">{{result.title}}</div>
                            <div class="search-results__item-description" :class="{ 'active' : result.active }">
                                {{result.description}}
                            </div>
                        </div>
                    </div>
                    <div class="search-result__empty" v-if="!searchingResults.length">
                        <p class="search-result__empty-text">No Search Resutl Found</p>
                    </div>
                </div>
    `,
});
