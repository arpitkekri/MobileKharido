import React, { Component } from 'react';
import Product from "./Product";
import Title from './Title';
import { storeProducts } from '../data.js';
export default class ProductList extends Component {
    // “state”, an object that determines how that component renders & behaves. 
    // In other words, “state” is what allows you to create components that are dynamic and interactive.
    state={
        Products: storeProducts
    }
    render() {
        console.log(this.state.Products)
        return (
            <React.Fragment>
                <div className="py-5">
                <div className="container">
                    <Title name="our" title="products"  />
                    {/* Product Row */}
                    <div className="row" />
                </div>
                </div>
            </React.Fragment>
        )
    }
}
