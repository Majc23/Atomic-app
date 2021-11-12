import React from 'react';
import { Link } from 'react-router-dom';

import { ShelfEntries } from "./ShelfEntries";
import { Footer } from "./Footer";
import '../css/App.css';

import  img1  from "../css/Paquete Atomic/Group4032.png";
import  flecha  from "../css/Paquete Atomic/Group4013.png";
import  team  from "../css/Paquete Atomic/Group 4040.png";




export const App = () => {
  return (
    <div className="App">
     <div className="container1">
        <div className="icon">
          
        </div>
        <div className="main">
          <img className="astro" alt="ok" src={img1}/>
          <div className="message">
            <span className="mantener">Desarrolla   todo</span>
            
            <span className="cambio">tu POTENCIAL</span>
           
            <span className="mantener">dentro del equipo</span>
            <div className="nada">
                <span className="cambio">ATOMIC</span>
                <span className="mantener">LABS</span>
            </div>
            
            <button className="botonP"><Link  to="/register">¡Quiero ser parte!</Link></button>
            
          </div>
        </div>
        <div className="showmore">
          <img className="continuar" alt="keep" src={flecha}/>
          <span>Quiero saber más</span>
        </div>
     </div>
     <div className="container2">
        <div className="title">
          <span className="mantener">SOMOS EL BRAZO DERECHO</span>
          <span className="cambio">DE LA TECNOLOGIA</span>
        </div>

        <div>
          <ShelfEntries count="1" />
        </div>

     </div>
     <div className="container2">
        <div className="title">
          <span className="mantener">¡TE ENCANTARA</span>
          <span className="cambio">TRABAJAR CON NOSOSTROS!</span>
        </div>
        <div>
        <img className="teamwork" alt="team" src={team}/>
        </div>
        <div>
          <ShelfEntries count="2" />
        </div>
        <div>
          <button className="boton2"><Link  to="/register">¡Quiero ser parte!</Link></button>
        </div>
     </div>
     <div className="container2">
        <div className="title2">
          <span className="mantener2">¿POR QUE</span>
          <span className="cambio2">ATOMIC?</span>
        </div>

        <div>
          <ShelfEntries count="3" />
        </div>

     </div>   
     <div className="container2pie">    
        <table>
          <tr>
              <th className="th1">CARACTERISTICAS</th>
              <th className="th1">OTROS</th>
              <th className="th1">ATOMIC</th>
          </tr>
          <tr>
              <td>Equipo inclusivo, honesto y auténtico</td>
              <th>1</th>
              <th>1</th>
          </tr>
          <tr>
              <td>Puntualidad es nuestro segundo nombre</td>
              <th>1</th>
              <th>1</th>
          </tr>
          <tr>
              <td>Siempre innovamos en nuestros productos</td>
              <th>1</th>
              <th>1</th>
          </tr>
          <tr>
              <td>Te ayudaremos a crecer e implementar nuevos conocimientos</td>
              <th>0</th>
              <th>1</th>
          </tr>
          <tr>
              <td>Nos preocupamos por tu bienestar</td>
              <th>0</th>
              <th>1</th>
          </tr>
          <tr>
              <td>El respeto es una parte fundamental</td>
              <th>0</th>
              <th>1</th>
          </tr>
        </table>
        <div>
        <button className="boton2"><Link  to="/register">¡Quiero ser parte!</Link></button>
        </div>
     </div>     
    <Footer/>
    </div>
  );
}

export default App;
