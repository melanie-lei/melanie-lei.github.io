import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Blog from './components/pages/Blog'
import Projects from './components/pages/Projects'
import Contact from './components/pages/Contact'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
