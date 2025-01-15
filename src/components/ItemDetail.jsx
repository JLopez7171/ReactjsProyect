import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"

function ItemDetail(props) {
  const { price, title, description, text, img, stock } = props

  return (
    <div >
      <img src={img} alt="" />
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
        <div>
          <p>$ {price}</p>
        </div>
        <p>{description}</p>
      </div>
      <div>
        <ItemCount onSubmitCount={onSubmitCount} max={stock} />
      </div>
    </div>
  );
}

export default ItemDetail
