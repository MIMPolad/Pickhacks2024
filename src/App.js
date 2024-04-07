import './App.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Home';
import Test from './Test';

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
      <Route path ='/' element={<Home/>}/>
      <Route path='test' element={<Test/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
