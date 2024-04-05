<template>
    <div class="container-fluid p-4">
        <div class="container col-6" v-if="!isLoading">
            <div class="form-group has-search mb-5 p-2 mt-5">
                <input type="text" class="form-control" placeholder="Search Shows..." v-model="searchQuery">
            </div>
        </div>
        <div class="show-item-container">
            <template v-for="(genereName, index) in genereList" :key="index">
                <section v-if="hasFilteredShows(genereName)" class="list" data-testid="list-section">
                    <Shows :tvShowsList="getFilteredShows(genereName)" :genereName="genereName" />
                </section>
            </template>
            <div v-if="!hasSearchMatches && !isLoading" class="text-center text-danger">
                <strong>Hmm, it looks like there are no matching shows.</strong>
            </div>
        </div>
        <div v-if="isLoading" class="text-center text-danger">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
            <div class="row mb-4">
                <strong>Getting Shows Ready...</strong>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { ref, onMounted, watch } from 'vue';
import _ from 'lodash';
import Shows from './Shows.vue';
import type { TVShow } from './type/type';
import { useShowStore } from '@/stores/ShowStore';

export default {
    components: {
        Shows
    },
    setup() {
        // State variables
        const showList = ref<TVShow[]>([]);
        const genereList = ref<string[]>([]);
        const searchQuery = ref<string>('');
        const filteredShowList = ref<TVShow[]>([]);
        const isLoading = ref<boolean>(true);
        const dataStore = useShowStore();
        const hasSearchMatches = ref<boolean>(false);

        /**
         * Fetches TV show data if not already fetched, then processes the data to extract genres
         * and updates the state variables accordingly. 
         */
        const fetchShowData = async () => {
            if (dataStore.showsData?.length === 0) {
                await dataStore.fetchData();
            }
            const tvShowsList: TVShow[] = dataStore.getShowsData;
            const genres = new Set<string>();
            tvShowsList.forEach(show => {
                show.genres.forEach((genre: string) => genres.add(genre));
            });

            genereList.value = Array.from(genres);
            showList.value = tvShowsList;
            isLoading.value = false;

            filterShows();
        };

        /**
         * Filters the list of TV shows based on the search query and updates the filtered show list.
         * Also updates the state to indicate if there are any search matches.
         */
        const filterShows = () => {
            filteredShowList.value = showList.value.filter(show => {
                return show.name.toLowerCase().includes(searchQuery.value.toLowerCase());
            });
            hasSearchMatches.value = filteredShowList.value.length > 0;
        };

        /**
         * Checks if there are any TV shows matching the provided genre in the filtered list.
         * @param {string} genre - The genre to check for in the TV shows.
         * @returns {boolean} - True if there are matching TV shows, false otherwise.
         */
        const hasFilteredShows = (genre: string) => {
            return filteredShowList.value.some(show => show.genres.includes(genre));
        };

        /**
         * Retrieves filtered and sorted list of TV shows by genre based on rating.
         * @param {string} genre - The genre by which to filter the TV shows.
         * @returns {TVShow[]} - The filtered and sorted list of TV shows.
         */
        const getFilteredShows = (genre: string) => {
            // Filter shows by genre
            const filteredShows = filteredShowList.value.filter(show => show.genres.includes(genre));
            filteredShows.sort((a, b) => {
                if (a.rating.average > b.rating.average) return -1;
                if (a.rating.average < b.rating.average) return 1;
                return 0;
            });
            return filteredShows;
        };


        const debouncedFilterShows = _.debounce(filterShows, 500);
        watch(searchQuery, debouncedFilterShows);

        onMounted(() => {
            fetchShowData();
        });

        return { isLoading, showList, genereList, searchQuery, filteredShowList, hasFilteredShows, getFilteredShows, hasSearchMatches };
    },
};
</script>
  