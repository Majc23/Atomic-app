import { types } from '../types/types';

import  img1  from "../css/Paquete Atomic/Group 4014.png";
import  img2  from "../css/Paquete Atomic/Group 4019.png";
import  img3  from "../css/Paquete Atomic/Group 4017.png";
import  img4  from "../css/Paquete Atomic/Group 4018.png";


const initialState = {
    msgError: null,
    items: [{
            img: img1,
            id:1
            },
            {
                img: img2,
                id: 2   
            },
            {
                img: img3,
                id: 3,   
            },
            {
                img: img4,
                id: 4,    
            }
            ],
    count:1,
    name: "",
    apellidos: ""
}


export const regReducer = ( state = initialState, action ) => {

    switch (action.type) {
        
        case  types.updateCount:
            return {
                ...state,
                count: action.payload 
            } 
            case types.activeDate1:
            return {
                ...state,
                name: action.payload.name,
                apellidos: action.payload.apellidos
            }
    
            case types.regRemoveError:
                    return {
                        ...state,
                        msgError: null
                    }
    
            case types.regStartLoading:
                return {
                    ...state,
                    loading: true
                }
     
            case types.regFinishLoading:
                return {
                    ...state,
                    loading: false
                }

        default:
            return state
    }


}