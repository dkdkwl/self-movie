import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './page/Home'
import Movies from './page/Movies'
import { Nav,Navbar,Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {  
  return (
    <div className="App">
      <header>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/movies">Movies</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <Routes>
        <Route path='/' element={<Home/>}>HOME</Route>
        <Route path='/movies' element={<Movies/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
