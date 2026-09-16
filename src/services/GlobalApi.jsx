import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "90e1bd1c272b656e8ede6ba1b79e5eeb";

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=' + api_key;

const getTrendingVideos = () => {
    return axios.get(
        movieBaseUrl + "/trending/all/day?api_key=" + api_key
    );
};

const getMovieByGenreId=(id)=>{
    return axios.get(movieByGenreBaseURL+"&with_genres="+id);

}
    
export default {
    getTrendingVideos,
    getMovieByGenreId
};