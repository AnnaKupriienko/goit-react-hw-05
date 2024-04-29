import { useEffect, useState} from "react";
import { useParams } from "react-router-dom"
import { getMoviesDetails } from "../../api";
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import Loader from '../../components/Loader/Loader'
import Error from "../../components/Error/Error"
import Info from "../../components/Info/Info"

export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const location = useLocation();
    const backLinkHref = location.state ?? '/movies';
    
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
            <Link to ={backLinkHref}>Go Back</Link>
            {loading && <Loader />}
            {error && <Error />}
            {movies  && <Info movies={movies}/> }
        </div>
    )
}

