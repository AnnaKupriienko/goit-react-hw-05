import axios from "axios";
const baseUrl = "https://api.themoviedb.org/3/trending/movie/day?language=en-US"
const options = {
    headers: {
        Authorization: ' Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MGQwZWI4NmU2Y2VjNjJjNTY5YjhlYjZlODFiYTY5ZiIsInN1YiI6IjY2MmUyNTlhMDcyMTY2MDEyYTY5YTYyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G6y5LUFsp_XSPgHEshygzHbtRwTSbfmB7NGBR9-gRbY'
    }
}
export const getTrendingMovies = async ()=>{
    const response = await axios.get(baseUrl, options)
    return response.data.results
}
