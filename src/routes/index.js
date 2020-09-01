import React from 'react';
import CarouselF from '../components/carousel/carousel.js';
import SimpleCards from '../components/simpleCards/simpleCards.js';
import CategoriasListHorizontal from '../components/categorias/categoriasListHorizontal.js';

export default function Index (){
    return (
        <div>
            <CarouselF></CarouselF>
            <CategoriasListHorizontal></CategoriasListHorizontal>
            <SimpleCards></SimpleCards>
        </div>
    )
}
