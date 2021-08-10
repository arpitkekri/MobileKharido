import React from 'react';

export default function CartItem({item, value}) {
    const { id, title, img, price, total, count } = item;
    const { increment, decrement, removeItem } = value;
    return (
        <div className="row my-2 text-capitalize text-center">
          <div className="col-10 mx-auto col-lg-2">
            <img src={ img } style={{width:'5rem',height:'5rem'}} className="img-fluid" alt="product" />
          </div>
          <div className="col-10 mx-auto col-lg-2 my-auto">
            <span className="d-lg-none">product : </span> { title }
          </div>
          <div className="col-10 mx-auto col-lg-2 my-auto">
            <span className="d-lg-none">price : </span> <span className="ml-1">₹</span> {price} <span className="mr-1">/-</span>
          </div>
          <div className="col-10 mx-auto col-lg-2 my-auto">
            <div className="d-flex justify-content-center">
              <div>
                <span className="btn btn-black mx-1" onClick={()=>decrement(id)}> − </span> 
                <span className="btn btn-black mx-1"> { count } </span>
                <span className="btn btn-black mx-1" onClick={()=>increment(id)}> + </span> 
              </div>
            </div>
          </div>
          {/* End button column */}

          <div className="col-10 mx-auto col-lg-2 my-auto">
            <div className="cart-icon" onClick={()=>removeItem(id)}>
                <i className="fas fa-trash"></i>
            </div>
          </div>

          <div className="col-10 mx-auto col-lg-2 my-auto">
            <strong>item total : <span className="ml-1">₹</span> {total} <span className="mr-1">/-</span></strong>
          </div>
        </div>
    )
}
