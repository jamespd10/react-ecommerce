import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrimarySearchAppBar from './partials/navbar/navbar.js';
import Header from './partials/header/header.js';
import FloatIcon from './partials/icon-float/icon-float.js';
import Footer from './partials/footer/footer.js';
import Index from './routes/index.js';
import Categories from './routes/categories.js';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <PrimarySearchAppBar></PrimarySearchAppBar>
        <Route path="/" exact component={Index}></Route>
        <Route path="/category" component={Categories}></Route>
        <FloatIcon></FloatIcon>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
