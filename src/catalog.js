import React from 'react';
import bolsoGris from './images/bolso-gris.jpg';
import bolsoGris2 from './images/bolso-gris2.jpg';
import bolsoNegro from './images/bolso-negro.jpg';
import portalentesBlanco from './images/Portalentes-blanco.jpg';
import portalentesNegro from './images/Portalentes-negro.jpg';
import riñoneraBlanca from './images/Riñonera-blanca.jpg';
import riñoneraBlanca2 from './images/Riñonera-blanca2.jpg';
import riñoneraNegra from './images/Riñonera-negra.jpg';
import riñoneraNegra2 from './images/Riñonera-negra2.jpg';
import setMateroMarron from './images/Set-matero-marron.jpg';
import setMateroByn from './images/Set-matero-byn.jpg';
import bolsoCeleste from './images/Bolso-celeste.jpg';

const catalog = [
    {
        id: 1,
        name: 'bolso gris',
        src: bolsoGris,
        price: 900,
        description: 'cartera gris claro',
        category: 'carteras',
        quantity: 0,
    },
    {
        id: 2,
        name: 'bolso gris2',
        src: bolsoGris2,
        price: 900,
        description: 'cartera gris oscuro',
        category: 'carteras',
        quantity: 0,
    },
    {
        id: 3,
        name: 'bolso negro',
        src: bolsoNegro,
        oldPrice: 1200,
        price: 900,
        description: 'cartera negra lisa',
        category: 'carteras',
        quantity: 0,
    },
    {
        id: 4,
        name: 'portalentes blanco',
        src: portalentesBlanco,
        oldPrice: 450,
        price: 300,
        description: 'portalentes con botón',
        category: 'accesorios',
        quantity: 0,
    },
    {
        id: 5,
        name: 'portalentes negro',
        src: portalentesNegro,
        price: 300,
        description: 'portalentes con abrojo',
        category: 'accesorios',
        quantity: 0,
    },
    {
        id: 6,
        name: 'riñonera blanca',
        src: riñoneraBlanca,
        price: 750,
        description: 'riñonera con brillo',
        category: 'riñoneras',
        quantity: 0,
    },
    {
        id: 7,
        name: 'riñonera blanca2',
        src: riñoneraBlanca2,
        price: 750,
        description: 'riñonera con brillo',
        category: 'riñoneras',
        quantity: 0,        
    },
    {
        id: 8,
        name: 'riñonera negra',
        src: riñoneraNegra,
        oldPrice: 900,
        price: 750,
        description: 'riñonera negra',
        category: 'riñoneras',
        quantity: 0,
    },
    {
        id: 9,
        name: 'riñonera negra2',
        src: riñoneraNegra2,
        price: 750,
        description: 'riñonera negra',
        category: 'riñoneras',
        quantity: 0,
    },
    {
        id: 10,
        name: 'set matero palmeras',
        src: setMateroMarron,
        price: 800,
        description: 'set matero palmeras',
        category: 'sets materos',
        quantity: 0,
    },
    {
        id: 11,
        name: 'set matero estampado',
        src: setMateroByn,
        price: 800,
        description: 'set matero estampado',
        category: 'sets materos',
        quantity: 0,
    },
    {
        id: 12,
        name: 'bolso de playa',
        src: bolsoCeleste,
        price: 750,
        description: 'bolso de playa',
        category: 'bolsos',
        quantity: 0,
    },
];

export default catalog;