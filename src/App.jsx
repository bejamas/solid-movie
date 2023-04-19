import { Routes, Route } from "@solidjs/router"
import { Navbar, Container } from 'solid-bootstrap';
import MovieList from './components/Movie-List';
import MovieDetails from "./components/Movie-Details";


function App() {
  return (
    <>
    <Container >
      <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Solid-Movie</Navbar.Brand>
      </Navbar>
      <MovieList />
    </Container>

    <Routes>
      <Route  path="/" component={MovieList}/>
      <Route path="/movie-details" component={MovieDetails}/>
    </Routes>
    </>
    

    
  );
}

export default App;
