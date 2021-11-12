import React from 'react'
import { useSelector } from 'react-redux';

import { ShelfEntry } from "./ShelfEntry";
import { ShelfEntryWhy } from "./ShelfEntryWhy";
import { ShelfProcess } from './ShelfProcess';

export const ShelfEntries = ( {count}) => {

    const { items, procesos, atomic } = useSelector( state => state.main );

    if(count === "2"){
        return (
            <div className="shelf2">
                {
                    procesos
                        .map( proceso => (
                            
                            <ShelfProcess 
                            key={ proceso.id }
                            { ...proceso }
                            />
                        ))
                }
            </div>
        )
    }
    if(count === "3"){
        return (
            <div className="shelf">
                {
                    atomic
                    .map( item => (
                      <ShelfEntryWhy 
                          key={ item.id }
                          { ...item }
                      />
                  ))
                }
            </div>
        )
    }
    if(count === "3"){
        return (
            <div className="shelf">
                {
                    atomic
                    .map( item => (
                      <ShelfEntryWhy 
                          key={ item.id }
                          { ...item }
                      />
                  ))
                }
            </div>
        )
    }
    
    return (
        <div className="shelf">
            {
                items
                .map( item => (
                  <ShelfEntry 
                      key={ item.id }
                      { ...item }
                  />
              ))
            }
         
        </div>
    )
}
