import axios from "../services/interceptor";
import { TVShowDetailValues, TVShowDetails } from "../type/type";



export const  listallTvShows = async() : Promise<TVShowDetailValues[]>=>{
 const results = await axios.get("/shows");
 return results.data;
}

export const  listShowsBySearch= async(searchValue:string) : Promise<TVShowDetails[]>=>{
    const results = await axios.get(`/search/shows?q=${searchValue}`);
    return results.data;
   }