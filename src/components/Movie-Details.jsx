import { createSignal, createEffect } from "solid-js";
import { Badge, Card, Spinner } from 'solid-bootstrap';
import { useParams } from "@solidjs/router";

const apiKey = import.meta.env.VITE_API_KEY;

const MovieDetails = () => {
    const id = useParams().id;
    const [movieDetail, setMovieDetail] = createSignal({});
    const [loading, setLoading] = createSignal(false);

    createEffect(() => {
        const getMovieDetails = async () => {
            setLoading(true)
            const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`)
            const data = await res.json();
            setMovieDetail(data);
            setLoading(false)
        }

        getMovieDetails();
    })

    return (
        <>
            <section>
                {loading() && (
                    <div class="text-center">
                        <Spinner animation="border" role="status" variant="primary">
                            <span class="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>

                )}

                {movieDetail() && (
                    <>
                        <h1>{movieDetail().Title}</h1>
                        <Card>
                            <Card.Img class="img-fluid" variant="top" src={movieDetail().Poster} />
                            <Card.Body>
                                {movieDetail().Genre && (
                                    movieDetail().Genre.split(", ").map((genre, index) => (
                                        <Badge key={index} bg="secondary" class="me-1">{genre}</Badge>
                                    ))
                                )}
                                <Card.Text>
                                    {movieDetail().Plot}
                                </Card.Text>
                                <Card.Text>
                                    {movieDetail().Year}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br />
                        <Card>
                            <Card.Body>
                                <Card.Text><b>Director:</b> {movieDetail().Director}</Card.Text>
                                <Card.Text>
                                    <b>Stars: </b>
                                    {movieDetail().Actors && (
                                        movieDetail().Actors.split(", ").map((actor, index) => (
                                            <span key={index}>
                                                {actor}
                                                {index !== movieDetail().Actors.split(", ").length - 1 && ", "}
                                            </span>
                                        ))
                                    )}
                                </Card.Text>
                                <Card.Text><b>Rating:</b> {movieDetail().imdbRating}</Card.Text>
                            </Card.Body>
                        </Card>
                    </>
                )}

            </section>
        </>
    )
}

export default MovieDetails