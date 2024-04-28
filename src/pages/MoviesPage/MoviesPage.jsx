import css from './MoviesPage.module.css'
export default function MoviesPage() {
    return (
        <form className={css.form}>
            <input className={css.text} type="text" name = "film"/>
            <button className={css.btn} type="submit"> Search</button>
        </form>
  
    )
}