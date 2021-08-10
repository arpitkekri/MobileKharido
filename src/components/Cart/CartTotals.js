import React from 'react';
import { Link } from 'react-router-dom';
import PayPalButton from './PayPalButton';
export default function CartTotals({ value, history }) {
    const { cartSubTotal, cartTaxSGST, cartTaxCGST, cartTotal, clearCart, cartTotalUSD } = value;
    return (
        <React.Fragment>
          <div className="container">
            <div className="row">
              <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                <Link to='/'>
                  <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button"
                  onClick={()=>clearCart()}>
                    clear cart
                  </button>            
                </Link>
                <h5>
                  <span className="text-title"> subtotal : </span>
                  <strong> <span className="mr-1">₹</span> { cartSubTotal } </strong>
                </h5>
                <h5>
                  <span className="text-title"> SGST : </span>
                  <strong> <span className="mr-1">₹</span> { cartTaxSGST } </strong>
                </h5>
                <h5>
                  <span className="text-title"> CGST : </span>
                  <strong> <span className="mr-1">₹</span> { cartTaxCGST } </strong>
                </h5>
                <h5>
                  <span className="text-title"> total : </span>
                  <strong> <span className="mr-1">₹</span> { cartTotal } </strong>
                </h5>
                <PayPalButton total={ cartTotalUSD } clearCart={ clearCart } history={ history }/>
              </div>
            </div>
          </div>
        </React.Fragment>
    );
}
