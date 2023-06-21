import './App.css';
import Home from './components/home/home.jsx';
import Barra from './components/navbar/barra.jsx';
import Peliculas from './components/peliculas/peliculas';
import Pelicula from"./components/Pelicula/pelicula";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// vamos a utilizar "reactroute" para que nos ayude con los enrutamientos dentro de la App
// y escribimos las rutas de la barra de navegación 
// Las rutas desconocidas nos llevarán de nuevo a Home
function App() {
  return (
    <BrowserRouter>
        <Barra/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route index path='/home' element={<Home/>} /> 
            <Route path="/peliculas" element={<Peliculas/>} />
            {/* creamos la ruta para que vaya a pelicula con el id y el título de la pelicula */}
            <Route path="/pelicula/:id/:title/" element={<Pelicula/>}/>
            <Route path="*" element={<Home/>} />
            
          </Routes>       
    </BrowserRouter>
  );
}

export default App;
