import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import css from "./MovieList.module.css"

export default function MovieList({ movies }) {
    const location = useLocation();
    return (
        <ul className={css.list}>
            {movies.map((movie) => {
                return (
                    <li key={movie.id}>
                        <NavLink state={location} className={css.item} to={`/movies/${movie.id}`}> {movie.title}</NavLink>
                    </li>
                );
            })}
            
        </ul>);
}