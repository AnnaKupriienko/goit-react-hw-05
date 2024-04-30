import { useEffect, useState, useRef} from "react";
import { NavLink, useParams, Outlet } from "react-router-dom"
import { getMoviesId } from "../../api";
import { useLocation } from "react-router-dom";
import Loader from '../../components/Loader/Loader'
import Error from "../../components/Error/Error"
import Info from "../../components/Info/Info"
import css from './MovieDetailsPage.module.css'


export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const [movies, setMovies] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const location = useLocation();
    const backLinkHref = useRef(location.state) ?? '/movies';
    
useEffect(() => {
    if (!movieId) {
        return;
    }

    async function fetchMovieDetail() {
        try {
            setLoading(true);
            const data = await getMoviesId(movieId);
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
            <NavLink className={css.link}  to={backLinkHref.current}>Go Back</NavLink>
            {loading && <Loader />}
            {error && <Error />}
            {movies && <Info movies={movies} />}
            <ul>
                <li>
                    <NavLink to="cast">Cast</NavLink>
                </li>
                 <li>
                    <NavLink to="reviews">Reviews</NavLink>
                </li>
            </ul>
            <Outlet/>
        </div>
    );
}

