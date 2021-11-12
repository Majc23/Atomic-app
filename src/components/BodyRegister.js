import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
//import validator from 'validator';

import { useForm } from "../hooks/useForm";
import { activeDate1 } from "../actions/regActions";


export const BodyRegister = () => {

    const dispatch = useDispatch();
    const [ formValues, handleInputChange ] = useForm({
        name: '',
        apellidos: '',
        cel:null
    });

  

    const { name ,apellidos, cel } = formValues;

    const { items, count} = useSelector( state => state.reg );

    
    


const handleChangeType = (e) => {
    handleInputChange(e);
    if(name.trim().length > 3 && apellidos.trim().length > 5){
        dispatch( activeDate1( name, apellidos ) );
    }
}
    if(count===2){
        return(
            <div>
                 <div className="titlereg">
                    <img className="imagefootreg" alt="ti" src={items[1].img}/>
                    <span className="mantenerreg">VALIDA TU</span>
                    <span className="cambioreg">CELULAR</span>
                </div>
                <div >
                    <h5 className="h5reg">Necesitamos validar tu numero para continuar</h5>
                    <h6 className="h5reg">Ingresa tu numero a 10 digitos y te enviaremos un codigo SMS</h6>
                </div>
                <div className="inputs">
                    <label className="labelreg">Número de celular</label>
                    <input 
                            className="inputsreg"
                            type="number"
                            name="name"
                            autoComplete="off"
                            value={cel}
                            onChange={handleChangeType}
                        />
                     
                </div>
                
                    
                
            </div>
        )
    }

    return (
        <div>
             <div className="titlereg">
                <img className="imagefootreg" alt="ti" src={items[0].img}/>
                <span className="mantenerreg">TE QUEREMOS</span>
                <span className="cambioreg">CONOCER</span>
            </div>
            <div >
                <h5 className="h5reg">Queremos saber que eres tú, por favor ingresa los siguientes datos:</h5>
            </div>
            <div className="inputs">
                <label className="labelreg">Nombre (s)</label>
                <input 
                            className="inputsreg"
                            type="text"
                            name="name"
                            autoComplete="off"
                            value={name}
                            onChange={handleChangeType}
                        />
                <label className="labelreg2">Apellidos</label>
                <input 
                            className="inputsreg"
                            type="text"
                            name="apellidos"
                            autoComplete="off"
                            value={apellidos}
                            onChange={handleChangeType}
                        />   
            </div>
            
        </div>
    )
}
