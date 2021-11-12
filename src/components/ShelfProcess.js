import React from 'react';

//import { useDispatch } from 'react-redux';

export const ShelfProcess = ({oracion, id}) => {

    if(id === 4){
        return(
            <div className="divshelf3">

                <h3 className="h2shelf4">{oracion} </h3>
                <div className="container3">
                </div>
        </div>
        )
    }
    
    return (
        
        <div className="divshelf3">

                <h3 className="h2shelf3">{oracion} </h3>
                <div className="container3">
                	<h2 className="flecha">→</h2>
                </div>
        </div>
            
            
        
    )
}