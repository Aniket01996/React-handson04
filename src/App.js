import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Comps/Home';
import Students from './Comps/Students';
import Contact from './Comps/Contact';
import Errors from './Comps/Errors';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/students' element={<Students />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/*' element={<Errors />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
