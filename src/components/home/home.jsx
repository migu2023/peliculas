import React from "react";
// importamos con la ruta adecuada dentro del directorio assets
import peliculasJSON from './../../assets/movies.json';
import seriesJSON from './../../assets/series.json'
// importamos el componente cardinfo
import Cardinfo from "../Cardinfo/cardinfo"
// Importamos el css para la hoja de estilos
import './home.css'



//creamos las constantes, mediante slice unas seis películas y series
//creamos las constantes para poder hacer un map del json peliculas y del json series
const Home = () => {
    const peliculas = peliculasJSON.slice(0,6);
    const series = seriesJSON.slice(0,6);     
    
//  Hay que poner un índice, en este caso como en el json hay ids únicos ponemos id
// Vamos a retornar un componente que se llame Cardinfo en vez de un div
// a cada iteración del map se le pasarán los parametros del Cardinfo, en este caso seis veces del array creado película
    const listPeliculas = peliculas.map((pelicula) => {
        return <Cardinfo key={pelicula.id} pelicula={pelicula}/>
    }) ;


    const listSeries = series.map((serie) =>{
        return <div key={serie.id}>{serie.name}</div>

    })
    //pintamos los títulos de las películas
    return (
        <>
            <div className="home">

            <h2> Películas recientes</h2>
            <div className="peliculas">
                {listPeliculas}
            </div>

            <h2> Listado series recientes</h2>
            <div className="series">            
            </div>
                {listSeries}

            </div>
        </>

    );

}

export default Home;