import axios from "../services/interceptor";

export const listallTvShows = async () => {
    const results = await axios.get("/shows");
    return results.data;
}
