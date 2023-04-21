import { Routes, Route, A } from "@solidjs/router"
import { Navbar, Container } from 'solid-bootstrap';
import MovieList from './components/Movie-List';
import MovieDetails from "./components/Movie-Details";


function App() {
  return (
    <>
      <Container>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>
            <A class="text-decoration-none" href="/">Solid-Movie</A>
          </Navbar.Brand>
        </Navbar>


        <Routes>
          <Route path="/" component={MovieList} />
          <Route path="/movie-details/:id" component={MovieDetails} />
        </Routes>
      </Container>
    </>



  );
}

export default App;
