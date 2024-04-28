import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar'
import Loader from '../../components/Loader/Loader'
import Error from "../../components/Error/Error"
import MovieList from '../../components/MovieList/MovieList';
import { getMovies } from '../../api'

export default function MoviesPage() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query");
    const handleSubmit = (value) => {
        setSearchParams({query: value})
    }

    useEffect(() => {
        if (query === "") {
            return;
        }
        async function fetchMovies() {
            try {
                setLoading(true);
                const data = await getMovies(query);
                setMovies(data)
            } catch (error) {
                setError(true);
            }
            finally {
                setLoading(false)
            }
        }
        fetchMovies();
    }, [query]);

    return (
        <>
            <SearchBar value={query} onSubmit={handleSubmit} />
            {loading && <Loader />}
            {error && <Error />}
            {movies.length >0 && <MovieList movies={movies}/>}
        </>
    )
}