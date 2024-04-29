import axios from "axios";
const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MGQwZWI4NmU2Y2VjNjJjNTY5YjhlYjZlODFiYTY5ZiIsInN1YiI6IjY2MmUyNTlhMDcyMTY2MDEyYTY5YTYyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G6y5LUFsp_XSPgHEshygzHbtRwTSbfmB7NGBR9-gRbY"
axios.defaults.headers.common['Authorization'] = `Bearer ${API_KEY}`;
axios.defaults.baseURL = "https://api.themoviedb.org"

export const getTrendingMovies = async ()=>{
    const response = await axios.get("3/trending/movie/day", {
        params: {
            language: "en-US",
        }
    } )
    return response.data.results;
}
export const getMovies = async (searcQuery) => {
    const response = await axios.get("3/search/movie",{
        params: {
            query: searcQuery,
            language: "en-US",
        }
    });
    return response.data.results;
}
export const getMoviesId = async (movieId) => {
    const response = await axios.get(`3/movie/${movieId}`, {
        params: {
            language: "en-US",
        },
    });
    return response.data;
}
export const getMovieCredits = async (movieId) => {
    const response = await axios.get(`3/movie/${movieId}/credits`, {
        params: {
            language: "en-US",
        },
    });
    return response.data;
}
export const getMovieReviews = async (movieId) => {
    const response = await axios.get(`3/movie/${movieId}/reviews`, {
        params: {
            language: "en-US",
        },
    });
    return response.data;
}