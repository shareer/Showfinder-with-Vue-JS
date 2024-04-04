<template>
    <div class="container-fluid p-4">
        <div class="container col-6">
            <div class="form-group has-search mb-5 p-2 mt-5">
                <input type="text" class="form-control" placeholder="Search Shows..." v-model="searchQuery">
            </div>
        </div>
        <div class="show-item-container">
            <section v-if="genereList.length > 0 && showList.length > 0" class="list" data-testid="list-section">
                <template v-for="(genereName, index) in genereList" :key="index">
                    <Shows :tvShowsList="showList" :genereName="genereName" />
                </template>
            </section>
        </div>
        <div v-if="isLoading" class="text-center text-danger">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { ref, onMounted, watch } from 'vue';
import Shows from './Shows.vue';
import axios from 'axios';
import type { TVShow } from './type/type';

export default {
    components: {
        Shows
    },
    setup() {
        const showList = ref<TVShow[]>([]);
        const genereList = ref<string[]>([]);
        const searchQuery = ref<string>('');
        const filteredShowList = ref<TVShow[]>([]);
        const isLoading = ref<boolean>(true);

        const getAllShows = async () => {
            try {
                const response = await axios.get('https://api.tvmaze.com/shows'); //TODO change 
                const tvShowsList: TVShow[] = response.data;
                console.log(tvShowsList, '')

                // Extract unique genre names
                const genres = new Set<string>();
                tvShowsList.forEach(show => {
                    show.genres.forEach(genre => genres.add(genre)); // TODO
                });

                // Update state variables
                genereList.value = Array.from(genres);
                showList.value = tvShowsList;
                isLoading.value = false;
            } catch (error) {
                console.error(error);
            }
        };


        const filterShows = () => {
            console.log('filterShows');
            console.log(showList, 'showList')
            const list = { showList }
            console.log(list, 'list');
            filteredShowList.value = showList.value.filter(show => {
                return show.name.toLowerCase().includes(searchQuery.value.toLowerCase());
            });
        };

        watch(searchQuery, filterShows);
        onMounted(() => {
            getAllShows();
        });

        return { isLoading, showList, genereList, searchQuery, filteredShowList };
    }
};
</script>
