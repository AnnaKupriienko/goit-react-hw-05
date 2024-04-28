import css from './SearchBar.module.css'
export default function SearchBar({value,onSubmit}) {
 return (
     <form className={css.form} value={value} onChange={e => onSubmit(e.target.value.trim())}>
            <input className={css.text} type="text" name = "query"/>
            <button className={css.btn} type="submit" > Search</button>
        </form>
  
    )   
}
