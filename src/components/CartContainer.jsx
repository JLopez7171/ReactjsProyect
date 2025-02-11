import cartContext from "../context/cartContext"
import { useContext, useState } from "react"
import { createBuyOrder } from "../data/database"


export default function CartContainer() {

    const { cartItems, removeItem, getTotalPrice, clearCart } = useContext(cartContext)

    const [userData, setUserData] = useState({
        username: "",
        surname: "",
        age: "",
    });

    function onInputChange(evt) {

        const inputName = evt.target.name;
        const newUserData = { ...userData };
        newUserData[inputName] = evt.target.value;
        setUserData(newUserData);
    }

    function handleCheckout(evt) {
        evt.preventDefault();
        const orderData = {
            buyer: {
                name: "federico",
            },
            items: cartItems,
            total: getTotalPrice(),
            data: new Date()
        }
        createBuyOrder(orderData)
        console.log(orderData)
        return orderData
    }

    return (

        <div>
            {
                cartItems.length === 0 ?
                    <h2 className="cartText">Tu carrito está vacío</h2>
                    :
                    cartItems.map((item) => (
                        <>
                            <h2 className="carth2">Tu carrito</h2>
                            <div key={item.id}>
                                <h3 className="cartText">{item.title}</h3>
                                <p className="cartText">${item.price}</p>
                                <p className="cartText">{item.count} unidades</p>
                                <button onClick={() => { removeItem(item.id) }}>Eliminar</button>
                            </div>
                        </>
                    ))
            }
            <button onClick={clearCart}>Vaciar carrito</button>
            <form className="cartText">
                <div style={{ display: "flex", marginBottom: 8 }}>
                    <label style={{ width: "100px", marginRight: 4 }}>Nombre</label>
                    <input name="username" type="text" onChange={onInputChange} />
                </div>

                <div style={{ display: "flex", marginBottom: 8 }}>
                    <label style={{ width: "100px", marginRight: 4 }}>Apellido</label>
                    <input name="surname" type="text" onChange={onInputChange} />
                </div>

                <div style={{ display: "flex", marginBottom: 8 }}>
                    <label style={{ width: "100px", marginRight: 4 }}>Edad</label>
                    <input name="age" type="text" onChange={onInputChange} />
                </div>

                <button
                    disabled={
                        !(
                            userData.username !== "" &&
                            userData.surname !== "" &&
                            userData.age !== ""
                        )
                    }
                    onClick={handleCheckout && clearCart}
                >
                    Realizar Compra
                </button>
            </form>
        </div>

    )
}