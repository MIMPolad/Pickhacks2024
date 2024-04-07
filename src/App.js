import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

<Navbar expand="lg" className="bg-body-tertiary">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="test">test</Nav.Link>
          </Nav>
    </Navbar>

    <Routes>
      <Route path ='/' element={<div>home page</div>}/>
      <Route path='test' element={<div>test page</div>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
