import React from 'react';

//import { useDispatch } from 'react-redux';

export const ShelfEntryWhy = ({ img, oraciones, id }) => {

    if ( id === 1 ) {
        return (
            <div className="divshelf4">
            <img className="shelfimage1p" alt="ok1" src={img}/>
            <ul className="listp">
                {
                    oraciones.map( oracion => (
                        <li className="lis" key={oracion}>{oracion}</li>
                    ))
                }
            </ul>
    </div>
        )
    }
    
    return (
        
        <div className="divshelf4">
                <img className="shelfimage1" alt="ok1" src={img}/>
                <ul className="listp">
                    {
                        oraciones.map( oracion => (
                            <li key={oracion}>{oracion}</li>
                        ))
                    }
                </ul>
        </div>
            
            
        
    )
}