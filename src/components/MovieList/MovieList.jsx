import { NavLink } from "react-router-dom";
import css from "./MovieList.module.css"

export default function MovieList({ movies }) {
    return (
        <ul className={css.list}>
            {movies.map((movie) => {
                return (
                    <li key={movie.id}>
                        <NavLink className={css.item} to={`/movies/${movie.id}`}> {movie.title}</NavLink>
                    </li>
                );
            })}
            
        </ul>);
}