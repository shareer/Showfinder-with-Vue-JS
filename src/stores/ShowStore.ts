import { defineStore } from "pinia"
import { listallTvShows } from '../services/api';
import type { TVShowDetailValues } from "@/type/type";

export interface ShowState {
  showsData: TVShowDetailValues[];
  loading:boolean;
}

export const useShowStore = defineStore('show', {
  state: (): ShowState => {
    return {
      showsData:[],
      loading:false
    }
  },
   getters: {
    getShowsData: (state) => {
       return state.showsData
    },
  },
  actions: {
    async fetchData() {
      this.loading = true;
      try {
        const results = await listallTvShows();
        this.showsData = results;
      } catch (error) {
        console.error("Error fetching TV shows:", error);
      } finally {
        this.loading = false;
      }
    }  
  }
})

