import { useState } from 'react'
import Carrito from '../img/carrito.png'
import ItemCount from './ItemCount'

export default function CartWidget(){
    const [count, setCount] = useState(0)

    return (
        <div className="cart-widget">
            <img src={Carrito} alt="" className="cart-icon" />
            <span className="item-count">{count}</span>
        </div>
    )
}