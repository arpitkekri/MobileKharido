import React, { Component } from 'react';
import Product from "./Product";
import Title from './Title';
// import { storeProducts } from '../data.js';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
export default class ProductList extends Component {
  // “state”, an object that determines how that component renders & behaves. 
  // In other words, “state” is what allows you to create components that are dynamic and interactive.
//   state={
//       Products: storeProducts
//   };
  render() {
    return ( 
      <React.Fragment>
        <ProductWrapper className="py-5">
        <div className="container">
          <Title name="our" title="products" />
          {/* Product Row */}
          <div className="row">
          <ProductConsumer>
            {value=>{
                return value.products.map( product => {
                    return <Product key={product.id} product={product} />;
                });
            }}
          </ProductConsumer>
          </div>
        </div>
        </ProductWrapper>
      </React.Fragment>
    )
  }
}
const ProductWrapper = styled.section``;
