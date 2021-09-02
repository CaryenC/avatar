import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Sidebar from './components/Sidebar';
import {HomeOne, HomeTwo} from './pages/Home';
import Reports from './pages/Reports';
import {Products, ProductsOne, ProductsTwo} from './pages/Products';
import DataParser from './components/DataParser';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Sidebar/>
      <Switch>
        <Route path='/home' exact component={DataParser}/>
        <Route path='/home/home1' exact component={HomeOne}/>
        <Route path='/home/home2' exact component={HomeTwo}/>
        <Route path='/products' exact component={Products}/>
        <Route path='/products/product1' exact component={ProductsOne}/>
        <Route path='/products/product2' exact component={ProductsTwo}/>
        <Route path='/reports' exact component={Reports}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
