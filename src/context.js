import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";
// Create a context object -> it comes with 2 components 1) Provider 2) Consumer
const ProductContext = React.createContext();

class ProductProvider extends Component {
  // Idea: products: [...storeProducts] in product ==> But it will not work 😒 becuase we have objects nested in the Array in data
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTaxSGST: 0,
    cartTaxCGST: 0,
    cartTotal:0,
    cartTotalUSD: 0
  };

  // componentDidMount -> This function called immediately after a component is mounted. Setting state here will trigger re-rendering.
  componentDidMount() {
    this.setProducts();
  }
  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item }; // Copying the values
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  }
  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };
  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };
  addToCart = (id) => {
    // let tempProducts = [...this.state.products];
    // const index = tempProducts.indexOf(this.getItem(id));
    // const product = tempProducts[index];
    const product = this.getItem(id);
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(()=>{
        return { cart: [...this.state.cart, product] };
    }, () => {
      this.addTotals();
    });
  };
  openModal = (id) => {
      const product = this.getItem(id);
      this.setState(() => {
          return { modalProduct: product, modalOpen: true };
      });
  };
  closeModal = () => {
      this.setState(() => {
          return { modalOpen: false };
      });
  };
  increment = (id) => {
      let tempCart = [...this.state.cart];
      const selectedProduct = tempCart.find(item => item.id === id);
      const index = tempCart.indexOf(selectedProduct);
      const product = tempCart[index];
      product.count = product.count + 1;
      product.total = product.count * product.price;
      this.setState(()=>{return{cart: [...tempCart]}}, () => {
        this.addTotals();
      });
  }
  decrement = (id) => {
      let tempCart = [...this.state.cart];
      const selectedProduct = tempCart.find(item => item.id === id);
      const index = tempCart.indexOf(selectedProduct);
      const product = tempCart[index];
      product.count = product.count - 1;
      
      if(product.count === 0) {
        this.removeItem(id);
      }
      else {
        product.total = product.count * product.price;
        this.setState(()=>{return{cart: [...tempCart] }}, () => {
          this.addTotals();
        });
      }
  }
  removeItem = (id) => {
      let tempProduct = [...this.state.products];
      let tempCart = [...this.state.cart];
      tempCart = tempCart.filter(item => item.id !== id);
      const index = tempProduct.indexOf(this.getItem(id));
      let removedProduct = tempProduct[index];
      removedProduct.inCart = false;
      removedProduct.count = 0;
      removedProduct.total = 0;
      this.setState(()=>{
        return {
          cart: [...tempCart], 
          product: [...tempProduct]
        };
      }, () => {
        this.addTotals();
      })
  }
  clearCart = () => {
      this.setState(()=>{
        return { cart: [] };
      }, () => {
        this.setProducts();
        this.addTotals();
      });
  }
  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    const tempSGST = subTotal * 0.09;
    const tempCGST = subTotal * 0.09;
    const SGST = parseFloat(tempSGST.toFixed(2));
    const CGST = parseFloat(tempCGST.toFixed(2));
    const total = parseFloat((subTotal + SGST + CGST).toFixed(2));
    const totalUSD = parseFloat((total*0.01368).toFixed(2));

    this.setState(()=>{
      return {
        cartSubTotal: subTotal,
        cartTaxSGST: SGST,
        cartTaxCGST: CGST,
        cartTotal: total,
        cartTotalUSD: totalUSD
      }
    })
  }
  /*
        Here the problem is Javasricpt referencing, it is not copying the values
        instead it assign reference to the state, so for making a deep copy we have to
        destructure our input data array and assign to state so our input is not gonna
        be affected and we can reset state as well. Thanks 😎
    */
  /* tester = () => {
        console.log('State products : ', this.state.products[0].inCart); // false
        console.log('data products : ', storeProducts[0].inCart); // false
        
        const tempProducts = [...this.state.products];
        tempProducts[0].inCart = true;
        this.setState(()=>{
            return {products: tempProducts}
        }, () => {
            console.log('😎 State products : ', this.state.products[0].inCart); // true
            console.log('😎 data products : ', storeProducts[0].inCart); // true
        })
    } */

  render() {
    return (
      <ProductContext.Provider
        value={{
          // destructuring array by spread operator ...
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
