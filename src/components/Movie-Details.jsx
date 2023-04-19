import { createSignal, createEffect } from "solid-js";


const MovieDetails = () => {
    const [movies, setMovies] = createSignal([]);
    const [searchWord, setSearchWord] = createSignal('mk');
    const [loading, setLoading] = createSignal(false);

    createEffect(() => {
        getMovies()
       
      })

      const getMovies = () => {
        console.log('get movie function is running')
        fetch(`http://www.omdbapi.com/?s=${searchWord}&page=1&type=movie&apikey=4487f74`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMovies(data.Search)
                setLoading(false)
            })
      }

    return (
        <div>
            <h1>A Movie Details</h1>
        </div>
    )
}

export  default MovieDetails