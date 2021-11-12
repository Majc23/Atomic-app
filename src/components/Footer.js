import React from 'react'

import  linkedin  from "../css/Paquete Atomic/linkedin.png";
import  twi  from "../css/Paquete Atomic/twitter.png";

export const Footer = () => {




    return (
        <footer>
            <h4>2020 AtomicLabs. Todos los derechos reservados.</h4>
            <h4><u>Aviso de privacidad</u></h4>
            <img className="imagefoot" alt="foot1" src={linkedin}/>
            <img className="imagefoot" alt="foot2" src={twi}/>
        </footer>
    )
}