import { createSignal, createEffect, For } from "solid-js";
import { Col, Form, Spinner, Row } from "solid-bootstrap";
import MovieCard from "./Movie-Card";


const apiKey = import.meta.env.VITE_API_KEY;

const MovieList = () => {
    const [movies, setMovies] = createSignal([]);
    const [searchWord, setSearchWord] = createSignal('men');
    const [loading, setLoading] = createSignal(false);

    createEffect(() => {
        const getMovies = async () => {
            setLoading(true)
            const res = await fetch(`http://www.omdbapi.com/?s=${searchWord()}&page=1&type=movie&apikey=${apiKey}`)
            const data = await res.json();
            setMovies(data.Search)
            setLoading(false)
        }

        getMovies();
    })



    const handleSearch = (event) => {
        setSearchWord(event.target.value);
    }

    return (
        <>
            <header class="text-center">
                <h1>Movie List</h1>
            </header>

            <section>
                <Form.Group class="mb-3" >
                    <Form.Control
                        type="search"
                        placeholder="Search movie"
                        value={searchWord()}
                        onChange={(event) => handleSearch(event)}
                    />
                </Form.Group>
            </section>

            <section>
                {loading() && (
                    <div class="text-center">
                        <Spinner animation="border" role="status" variant="primary">
                            <span class="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>

                )}

                {movies() && movies().length > 0 ? (
                    <Row>
                        <For each={movies()}>{(movie) =>
                            <Col sm={12} md={3}>
                                <MovieCard key={movie.imdbID} movie={movie} />
                            </Col>
                        }
                        </For>
                    </Row>
                ) : (
                    <p>No movies found for the given search query.</p>
                )}
            </section>
        </>
    )
}

export default MovieList