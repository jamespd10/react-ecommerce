import React from 'react';
import Categorias from '../components/categorias/categorias.js';

export default function Categories (){
    return (
        <div>
            {[...new Array(15)]
              .map(
                () => <Categorias />
              )}
        </div>
    )
}
