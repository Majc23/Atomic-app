import React from 'react';

//import { useDispatch } from 'react-redux';

export const ShelfEntry = ({ img, name, oraciones, id }) => {

    if ( id === 2 ) {
        return (
            <div className="divshelf2">
                <img className="shelfimage" alt="ok1" src={img}/>
                <h2 className="h2shelf2">{name}</h2>
                <ul className="list2">
                    {
                        oraciones.map( oracion => (
                            <li key={oracion}>{oracion}</li>
                        ))
                    }
                </ul>
        </div>
        )
    }
    
    return (
        
        <div className="divshelf">
                <img className="shelfimage" alt="ok1" src={img}/>
                <h2 className="h2shelf">{name}</h2>
                <ul className="list">
                    {
                        oraciones.map( oracion => (
                            <li key={oracion}>{oracion}</li>
                        ))
                    }
                </ul>
        </div>
            
            
        
    )
}
