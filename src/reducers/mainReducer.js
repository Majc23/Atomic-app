import { types } from '../types/types';

import  img1  from "../css/Paquete Atomic/Group 4035.png";
import  img2  from "../css/Paquete Atomic/Group 4036.png";
import  img3  from "../css/Paquete Atomic/Group 4037.png";
import  img4  from "../css/Paquete Atomic/Group 4041.png";
import  img5  from "../css/Paquete Atomic/Group 4042.png";
import  img6  from "../css/Paquete Atomic/Group 4043.png";

const initialState = {
    items: [{
            img: img1,
            id:1,
            name: 'EXPLORA',
            oraciones: [
                        'Inovación y creción tecnológica',
                        'UI/UX',
                        'Innovación'
                    ]
            },
            {
                img: img2,
                id: 2,
                name: 'IMAGINA',
                oraciones: [
                            'Estrategia Digital',
                            'Big Data & Analysis',
                            'Consultoría Tenológica',
                            'Reducción de costos TI'
                        ]    
            },
            {
                img: img3,
                id: 3,
                name: 'CONQUISTA',
                oraciones: [
                            'Desarrollo tecnológico a la medida',
                            'Ciberseguridad',
                            'Servicios de la Nube'
                        ]    
            }
            ],
    procesos: [
        {
            oracion: 'Contratación   remota',
            id:1
        },
        {
            oracion: 'Entrevista con el área de RH',
            id:2
        },
        {
            oracion: 'Prueba práctica',
            id:3
        },
        {
            oracion: 'Entrevista técnica',
            id:4
        }
    ],
    atomic: [{
        img: img4,
        id:1,
        oraciones: [
                    'Usamos las tecnologias mas modernas',
                    'Inovamos y creamos proyectos retadores'
                ]
        },
        {
            img: img5,
            id:2,
            oraciones: [
                        '¡Trabajamos en equipo rumbo al éxito!',
                        'No tenemos codigo de vestimenta'
                    ]
            },
        {
        img: img6,
        id:3,
        oraciones: [
                    'Realizamos actividades para tu bienestar',
                    '¡Tenemos un parque frente a la oficina!'
                ]
        },
        ],
}


export const mainReducer = ( state = initialState, action ) => {

    switch (action.type) {
        
        case  types.updateCount2:
            return state


        default:
            return state
    }


}