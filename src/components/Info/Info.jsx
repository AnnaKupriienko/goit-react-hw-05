import css from "./Info.module.css"

export default function Info({ movies }) {
    const defaultImg =
        '<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>'
    return (
        <div className={css.container}>
            <img src={movies.poster_path ?
                `https://image.tmdb.org/t/p/w500/${movies.poster_path}` : defaultImg}
                width={250} alt="poster"/>
            <div>
                <h1>{movies.title}</h1>
                <p> Use Score: { movies.vote_average} %</p>
                <h2>Overview</h2>
                <p>{movies.overview}</p>
                <h2>Genres</h2>
                <ul className={css.list}>
          {movies.genres.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
                </ul> 
            </div>
</div>
    );
}