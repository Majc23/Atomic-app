import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { updateCount } from "../actions/regActions";

export const Button = () => {

    const { count, name, apellidos} = useSelector( state => state.reg );
    const dispatch = useDispatch();

    const handleChangeCount = () => {
        console.log('Cambiar conut ')
        dispatch(updateCount(count + 1));
    }

    if(count===2){
        return (
            <button className="boton2reg">Continuar</button>
        )
    }

    return (
        <button className="boton2reg" onClick={handleChangeCount} disabled={ name === '' || apellidos === '' }>Enviar</button>
    )
}
