import React from 'react'
import { useSelector } from 'react-redux';

import { ShelfEntryReg  } from "./ShelfEntryReg";

export const ShelfEntriesReg = ( ) => {

    const { items} = useSelector( state => state.reg );


    
    return (
        <div className="shelfreg">
            {
                items
                .map( item => (
                  <ShelfEntryReg 
                      key={ item.id }
                      { ...item }
                  />
              ))
            }
         
        </div>
    )
}
