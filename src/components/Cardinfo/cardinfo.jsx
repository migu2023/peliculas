import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";


// Creamos el componente cardinfo dentro de la carpeta Cardinfo y 
// hemos buscado en el mui un componente tarjeta card
// aqui recuperamos los props para Cardinfo
const Cardinfo = (props) => { 
    // hacemos un console log para ver si saca la info de la película
    console.log(props.pelicula);
    const navigate = useNavigate ();
    // creamos una variable que sea imagen para poner el poster de la película
    const image  = props.pelicula.poster_path;

    /* Creamos un botón para incluir el card dentro del botón */
    return (
        <>
        {/* al disparar el evento onClick irá a la ruta pelicula, con los parametros del id y del title */}
        <Button onClick={()=>{navigate(`/pelicula/${props.pelicula.id}/${props.pelicula.title}`)}}>
        <Card >
          <CardMedia
          component="img"
          height="330"
          // aquí colocamos la variable image para que vaya pintando los posters de las películas 
          //y escribimos también el título de la película dentro del cardcontent
          image={image}        
          alt="pelicula image"
          />  
          <CardContent>
            <Typography gutterBottom variant="h8" component="div">
              {props.pelicula.title}
              <h5>+ INFO</h5> 

            </Typography>            
          </CardContent>    
        </Card>

      </Button>
        </>

    );
}

export default Cardinfo