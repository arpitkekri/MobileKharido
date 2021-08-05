import React, { Component } from "react";
import './App.css';

// import package/distribution folder {dist} /file location/ filename
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';


class App extends Component {
  render() {
    return (
        <React.Fragment>
          <Navbar></Navbar>
          <ProductList></ProductList>
          <Details></Details>
          <Cart></Cart>
          <Default></Default>
        </React.Fragment>
    );
  }
}

export default App;
