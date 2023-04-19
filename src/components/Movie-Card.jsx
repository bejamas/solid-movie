import { Button } from 'solid-bootstrap';
import { Card, Col, Row, Container } from "solid-bootstrap";

const MovieCard = (props) => {
    const { Title, Year, Poster } = props.movie;
    return (

        <Card class='my-2'>
            <Card.Img variant="top" src={Poster} />
            <Card.Body>
                <Card.Title>{Title}</Card.Title>
                <Card.Text>
                    {Year}
                </Card.Text>
                <Button variant="primary">See Details</Button>
            </Card.Body>
        </Card>

    )
}

export default MovieCard