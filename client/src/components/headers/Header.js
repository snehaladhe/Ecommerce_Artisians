import React, {useState,useContext} from 'react'
import { GlobalState } from '../../GlobalState'
import Menu from './icon/menu.svg'
import close from './icon/close.svg'
import cart from './icon/cart.svg'
import {Link} from 'react-router-dom'



function Header() {
    const value=useContext(GlobalState)
    return (
        <header>
            <div className='menu'>
                <img src={Menu} alt='menu' width={"30"} />
            </div>
            <div className='logo'>
                <h1>
                    <Link to='/'>ECOMMERCE_ARTISIANS</Link>
</h1>
            </div>
       </header>
    )
}
export default Header