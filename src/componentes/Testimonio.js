import React from 'react';
import '../hojas-de-estilo/Testimonio.css';

function Testimonio(props) {
  return (
    // Contenedor principal del testimonio con una clase CSS para el estilo
    <div className='contenedor-testimonio'>
      //* Imagen del testimonio, se carga dinámicamente usando la prop 'imagen' *//
      <img 
        className='imagen-testimonio'
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        alt='Foto de Emma' // Texto alternativo para la imagen
      />
      // Contenedor para el texto del testimonio
      <div className='contenedor-texto-testimonio'>
        // Nombre del testimonio y país
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        // Cargo y empresa del testimonio
        <p className='cargo-testimonio'>
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        // Texto del testimonio
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonio;
