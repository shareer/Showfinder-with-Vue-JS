
import type { TVShowDetailValues, TVShowDetails } from "@/type/type";
import axios from "../services/interceptor";


export const listallTvShows = async () => {
    const results = await axios.get("/shows");
    return results.data;
}

export const listShowsBySearch = async (searchValue: string): Promise<TVShowDetails[]> => {
    const results = await axios.get(`/search/shows?q=${searchValue}`);
    return results.data;
}