import './App.css';
import Home from './Home';
import Puns from './Puns';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Container from 'react-bootstrap/Container';


function App() {
  return (
    <BrowserRouter>
      <Container>
        <Navbar expand="lg" className="bg-body-tertiary">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="puns">Puns</Nav.Link>
              </Nav>
        </Navbar>
      </Container>
    <Routes>
      <Route path ='/' element={<Home/>}/>
      <Route path='puns' element={<Puns/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
