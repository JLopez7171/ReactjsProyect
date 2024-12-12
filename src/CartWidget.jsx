import Carrito from './img/carrito.png'

export default function CartWidget(){
    const itemCount = 0;

    return (
        <div className="cart-widget">
            <img src={Carrito} alt="" className="cart-icon" />
            <span className="item-count">{itemCount}</span>
        </div>
    )
}