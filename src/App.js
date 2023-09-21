import './App.css';
import Navbar from './compontents/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' />
        </Routes>
      </Router>
    </>
  );
}

export default App;
