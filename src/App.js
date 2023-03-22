import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Movies from './components/Movies';
import Addmovie from './components/Addmovie';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        {/* <Route path='/' element={<Teachers></Teachers>}> </Route> */}
        <Route path='/movies' element={<Movies></Movies>}></Route>
        <Route path='/addmovie' element={<Addmovie></Addmovie>}></Route>
        {/* <Route path='/teachers' element={<Teachers></Teachers>}></Route> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
