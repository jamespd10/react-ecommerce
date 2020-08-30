import React from 'react';
import PrimarySearchAppBar from './partials/navbar/navbar.js';
import Header from './partials/header/header.js';
import FloatIcon from './partials/icon-float/icon-float.js';
import CarouselF from './components/carousel/carousel.js';
import Categorias from './components/categorias/categorias.js';
import Footer from './partials/footer/footer.js';

function App() {
  return (
    <div>
      <Header></Header>
      <PrimarySearchAppBar></PrimarySearchAppBar>
      <CarouselF></CarouselF>
      <FloatIcon></FloatIcon>
      <Categorias></Categorias>
      <Footer></Footer>
    </div>
  );
}

export default App;
