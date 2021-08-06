import React, { Component } from 'react'

// Create a context object -> it comes with 2 components 1) Provider 2) Consumer
const ProductContext = React.createContext();


class ProductProvider extends Component {
    render() {
        return (
            <ProductContext.Provider value="hello from context">
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}



const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };