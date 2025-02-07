import { useState, useContext } from 'react'
import Carrito from '../img/carrito.png'
import cartContext from '../context/cartContext'

export default function CartWidget(){
    const context = useContext(cartContext)
    const [count, setCount] = useState(0)

    return (
        <div className="cart-widget">
            <img src={Carrito} alt="" className="cart-icon" />
            <span className="item-count">{context.countItemsInCart()}</span>
        </div>
    )
}