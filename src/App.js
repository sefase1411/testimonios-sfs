import React from 'react';
import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Perros mas influyentes en su campo de acción:</h1>
        <Testimonio
          nombre='Milton Vega'
          pais='Singapur'
          imagen='perro1'
          cargo='Ingeniero de tienda de mascotas'
          empresa='Paw Sitters'
          testimonio='En Paw Sitters, nos dedicamos a proporcionar el mejor cuidado posible a las mascotas mientras sus dueños están fuera. Me encanta conocer diferentes perros y aprender sobre sus personalidades únicas. Es un trabajo lleno de amor y satisfacción.'/>
        <Testimonio
          nombre='Sarah Chima'
          pais='Nigeria'
          imagen='perro2'
          cargo='Empresario canino'
          empresa='Happy Paws'
          testimonio='Trabajar con Happy Paws ha sido una experiencia increíble. Como entrenador de perros, he visto cómo las técnicas de entrenamiento positivo pueden transformar el comportamiento de los perros. Es gratificante ver a los dueños felices con el progreso de sus mascotas.'/>
        <Testimonio 
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='perro3'
          cargo='Cuidadora de perros bebes'
          empresa='Pet Paradise'
          testimonio='Ser paseadora de perros en Walkies Co. es el mejor trabajo del mundo. Paso mis días al aire libre, disfrutando de la naturaleza con mis amigos de cuatro patas. Es maravilloso ver lo felices que son los perros cuando salen a caminar y juegan en el parque.'/>
      </div>
    </div>
  );
}

export default App;
