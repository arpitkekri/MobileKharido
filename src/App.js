import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import './App.css';

// import package/distribution folder {dist} /file location/ filename
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Default from './components/Default';
import Cart from './components/Cart';
import Modal from './components/Modal';
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
        <React.Fragment>
          {/* Exclude Navbar from Switch because we want to display NavBar on all the pages */}
          <Navbar />
          <Switch>
            <Route exact path = "/" component = { ProductList } />
            <Route path = "/details" component = { Details } />
            <Route path = "/cart" component = { Cart } />
            <Route component = { Default } />
          </Switch>
          <Modal />
          <Footer />
        </React.Fragment>
    );
  }
}

export default App;
