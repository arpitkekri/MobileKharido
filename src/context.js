import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data';
// Create a context object -> it comes with 2 components 1) Provider 2) Consumer
const ProductContext = React.createContext();


class ProductProvider extends Component {
    state={
        products: storeProducts,
        detailProduct: detailProduct
    }
    handleDetail = () => {
        console.log("Hello from details");
    };
    addToCart = () => {
        console.log("Hello from add to cart");
    };
    render() {
        return (
            <ProductContext.Provider value={{
                // destructuring array by spread operator ...
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}



const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };