import { Button } from 'solid-bootstrap';
import { Card } from "solid-bootstrap";
import { A } from "@solidjs/router";

const MovieCard = (props) => {
    const { imdbID, Title, Year, Poster } = props.movie;
    return (

        <Card class='my-2'>
            <Card.Img variant="top" src={Poster} />
            <Card.Body>
                <Card.Title>{Title}</Card.Title>
                <Card.Text>
                    {Year}
                </Card.Text>
                <Button variant="primary">
                    <A class='text-white text-decoration-none' href={`/movie-details/${imdbID}`}>
                        See Details
                    </A>
                </Button>
            </Card.Body>
        </Card>

    )
}

export default MovieCard