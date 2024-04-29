import { getMovieReviews } from "../../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Loader from '../../components/Loader/Loader'
import Error from "../../components/Error/Error"


export default function MovieReviews() {
const { movieId } = useParams();
const [review, setReview] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchMovieReviews() {
            try {
                setLoading(true);
                const data = await getMovieReviews(movieId)
                setReview(data);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        fetchMovieReviews();
    }, [movieId])
    
    return (
    <>
    {loading && <Loader />}
    {error && <Error />}
            {review && (
                <ul>
                    {review.results.map((item) => {
                        return (<li key={item.id}>
                            <h4>AUTHOUR: {item.author}</h4>
                            <p>{item.content}</p>
                        </li>)
                    })}
                </ul>
    )}
    </>)
    
}