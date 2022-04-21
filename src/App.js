import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'



//pages
import { Home } from './Pages/Home/Home';
import { About } from './Pages/About/About';
import { Projects } from './Pages/Projects/Projects';
import { Contact } from './Pages/Contact/Contact';
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <div className="main">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
