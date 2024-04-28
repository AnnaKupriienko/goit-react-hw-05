import { useEffect, useState} from "react";
import { useParams } from "react-router-dom"
import { getMoviesDetails } from "../../api";
import Loader from '../../components/Loader/Loader'
import Error from "../../components/Error/Error"
import Info from "../../components/Info/Info"

export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

useEffect(() => {
    if (!movieId) 
        return;
    async function fetchMovieDetail() {
        try {
            setLoading(true);
            const data = await getMoviesDetails(movieId);
            setMovies(data);
    } catch (error) {
            setError(true);
        }
        finally {
            setLoading(false);
        }}
    fetchMovieDetail(); 
}, [movieId]);
    return (
        <div>
            {loading && <Loader />}
            {error && <Error />}
            {movies  && <Info movies={movies}/> }
        </div>
    )
}