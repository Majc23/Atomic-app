import React from 'react';

import {useSelector } from 'react-redux';

//import { Provider } from 'react-redux';

//import { store } from './store/store';

import { ShelfEntriesReg } from "./ShelfEntriesReg";
import { BodyRegister } from "./BodyRegister";
import { Progress } from "./Progress";
import { Button } from './Button';
import { Footer } from "./Footer";
import  img1  from "../css/Paquete Atomic/Group 4033.png";
import  img2  from "../css/Paquete Atomic/Group 4034.png";

import '../css/Register.css';

export const Register = () => {

    const { count } = useSelector( state => state.reg );

    if(count===2){
        <div className="App">
           <div className="congen">
                <div className="cointainerreg">
                    <ShelfEntriesReg  />
                    <form className="barra">
                        <Progress done="40"/>
                    </form>
                    <BodyRegister/>
                    <Button/>
                </div>
                <img className="imgreg1" alt="ok" src={img2}/>
            </div> 
            <Footer/>
        </div>
    }

    return (
        <div className="App">
           <div className="congen">
                <div className="cointainerreg">
                    <ShelfEntriesReg  />
                    <form className="barra">
                        <Progress done="20"/>
                    </form>
                    <BodyRegister/>
                    <Button/>
                </div>
                <img className="imgreg1" alt="ok" src={img1}/>
            </div> 
            <Footer/>
        </div>
        
        
    )
}