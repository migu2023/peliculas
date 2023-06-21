import React from "react";
// importamos desde mui elementos, es una libraria de estilos y componentes de material, lo instalamos desde npm
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MovieIcon from '@mui/icons-material/Movie';
import { Link, useNavigate} from "react-router-dom";

// creamos el componente barra, para hacer la barra de navegación

const Barra = () => {
    const navigate = useNavigate();
// En el return introducimos estilos de mui para botones y tipografias
// Creamos una función para crear un link a peliculas
    const goToPeliculas = () => {
        navigate("/peliculas")};
    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar> 

                <MovieIcon />            
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to="/home">Aplicación Películas</Link>                                       
                </Typography>  

                {/* creamos dos botones en la barra de navegación con dos formas de hacer los links */}
                {/* el primero lo hacemos mediante un link, dentro de ese link */}
                <Link to="/peliculas">                    
                    <Button variant="contained">Películas Link</Button>
                </Link>   
                    {/* el segundo lo hacemos llamando a una función a traves de un evento onClick */}
                    <Button variant="contained" onClick={goToPeliculas}>Películas</Button>     
                   
                </Toolbar>
            </AppBar>
        </Box>        
        </>

    )

}

export default Barra;