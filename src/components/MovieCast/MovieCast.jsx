import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getMovieCredits } from "../../api";
import Loader from '../../components/Loader/Loader'
import Error from "../../components/Error/Error"
import css from './MovieCast.module.css'

export default function MovieCast() {
    const { movieId } = useParams();
    const [credit, setCredit] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchMovieCredit() {
            try {
                setLoading(true);
                const data = await getMovieCredits(movieId)
                setCredit(data);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        fetchMovieCredit();
    }, [movieId])
    
    return (
    <>
    {loading && <Loader />}
    {error && <Error />}
            {credit && (
                <ul className={css.list}>
                    {credit.cast.map((item) => {
                        return (<li key={item.id}>
                            <img src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                                alt={`photo ${item.name}`}
                                width="100" />
                            <p>{item.name}</p>
                            <p>{item.character}</p>
                        </li>)
                    })}
                </ul>
    )}
    </>)
}
