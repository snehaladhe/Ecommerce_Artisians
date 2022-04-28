import React, { useContext, useState } from 'react'
import { GlobalState } from '../../../GlobalState'
import {Link} from 'react-router-dom'
function Cart() {
    const state = useContext(GlobalState)
    const [cart] = state.userAPI.cart
    const [total,setTotal]= useState(0)
    
    if (cart.length === 0)
        return <h2 style={{textAlign:"center", fontsize:"Srem"}}>Cart Empty</h2>
    return (
        <div>
            {
                cart.map(product => (
                    <div className='detail cart'>
                        <img src={product.images.url} alt="" className='img_container' />

                        <div className='box-detail'>
                            <div className='row'>
                                <h2>{product.title}</h2>

                                <h6>#id: {product.product_id}</h6>
                    
                            </div>
                            <span>₹ {product.price*product.quantity}</span>
                            <p>{product.description}</p>
                            <p>{product.content}</p>
                            <div className='amount'>
                                <button> - </button>
                                <span>{product.quantity}</span>
                                <button> + </button>
                            </div>

                            <div className='delete'>X</div>
                            
                           
                        </div>
                    </div>

            
                ))
            }
            <div className='total'>
                <h3>Total: ₹0 </h3>
                <Link to="#!">Payment</Link>
            </div>
        </div>
    )
}

export default Cart
