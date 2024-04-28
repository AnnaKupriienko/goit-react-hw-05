import { useEffect, useState } from 'react'
import { getTrendingMovies } from '../../api'
import Loader from '../../components/Loader/Loader'
import Error from "../../components/Error/Error"
import MovieList from '../../components/MovieList/MovieList';
import css from "./HomePage.module.css"

export default function HomePage() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchMovies() {
            try {
                setLoading(true);
                const data = await getTrendingMovies();
                setMovies(data);
            } catch (error) {
            setError(true); }
        finally {
            setLoading(false)}}
         fetchMovies();
}, []);

    return (
        <div>
            <h2 className={css.title}>Trending Today</h2>
            {loading && <Loader/>}
            {error && <Error/>}
            {movies.length > 0 && <MovieList movies={movies} />}
        </div>
    );
}