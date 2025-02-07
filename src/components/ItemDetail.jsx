import cartContext from '../context/cartContext'
import {useContext } from 'react'
import ItemCount from "./ItemCount"

function ItemDetail(props) {
  const { price, title, description, text, img, stock, category, id} = props

  const {addItem} = useContext(cartContext)

  function onSubmitCount(count) {
    console.log(`Agregaste ${count} unidades al carrito`);
    addItem({id, title, price, count})

  }

  return (
    <div className="itemDetail" >
      <img src={img} alt="" />
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
        <p>{description}</p>
        <div>
          <p>$ {price}</p>
        </div>
        <small>{category}</small>
      </div>
      <div>
        <ItemCount onSubmitCount={onSubmitCount} max={stock} min={1} />
      </div>
    </div>
  );
}

export default ItemDetail
