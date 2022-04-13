import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import './app.scss';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Workspace from './pages/Workspace/Workspace';
import Pricing from './pages/Pricing/Pricing';
import Contact from './pages/Contact/Contact';
import Notfound from './pages/Notfound/Notfound';


function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <main>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='workspace' element={<Workspace/>}/>
          <Route path='price' element={<Pricing/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='*' element={<Notfound/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
