<template>
  <div class="container-fluid">
    <div class="container col-6">
      <div class="form-group has-search mb-5 p-2 mt-5">
      <span class="fa fa-search form-control-feedback"></span>
      <input type="text" class="form-control" placeholder="Search Shows.." v-model="searchQuery">
    </div>
  </div>
    <div class="show-item-container">
      <section v-if="genereList.length > 0 && showList.length > 0" class="list" data-testid="list-section">
        <template v-for="(genereName, index) in genereList" :key="index">
          <ShowItem :tvShowsList="showList" :genereName="genereName" />
        </template>
      </section>
    </div>
    </div>
   
</template>

<!-- <template>
  <div class="container">
    <div class="form-group has-search mb-5 p-2 mt-5">
      <span class="fa fa-search form-control-feedback"></span>
      <input type="text" class="form-control" placeholder="Search Shows.." v-model="searchQuery">
    </div>
    <div class="show-item-container">
      <section v-if="genereList.length > 0 && filteredShowList.length > 0" class="list" data-testid="list-section">
        <template v-for="(genereName, index) in genereList" :key="index">
          <ShowItem :tvShowsList="showList" :genereName="genereName" />
          <ShowItem :tvShowsList="filteredShowList" :genereName="genereName" />
        </template>
      </section>
    </div>
  </div>
</template> -->

<script lang="ts">
import { ref, onMounted, watch } from 'vue';
import ShowItem from './components/ShowItem.vue';
import axios from 'axios';

interface TVShow {
  id: number;
  name: string;
}

export default {
  components: {
    ShowItem
  },
  setup() {
    const showList = ref<TVShow[]>([]);
    const genereList = ref<string[]>([]);
    const searchQuery = ref<string>('');
    const filteredShowList = ref<TVShow[]>([]);

    const getAllShows = async () => {
      try {
        const response = await axios.get('https://api.tvmaze.com/shows');
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
      } catch (error) {
        console.error(error);
      }
    };
    

    const filterShows = () => {
      console.log('filterShows');
      console.log(showList, 'showList')
      const list = { showList}
      console.log(list, 'list');
      filteredShowList.value = showList.value.filter(show => {
        return show.name.toLowerCase().includes(searchQuery.value.toLowerCase());
      });
    };

    watch(searchQuery, filterShows);
    onMounted(() => {
      getAllShows();
    });

    return { showList, genereList, searchQuery, filteredShowList };
  }
};
</script>

<style>
html, body {
    margin: 0;
    padding: 0;
}
#app {
  /* TODO change hex code*/
  background: #111; 
}
</style>
