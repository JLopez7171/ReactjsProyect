import { Link } from "react-router-dom";
import {memo} from "react"

 function Item(props) {
    const {id, price, title, category, img} = props;

    return (
        <article className="card">
            <img src={img} alt="" />
            <div>
                <h3>{title}</h3>
                <p>{price}</p>
                <small>{category}</small>
            </div>

            <Link to={`/item/${id}`}>

                <button>Más detalles</button>

            </Link>

        </article>
    );
}
export default memo(Item, (prevProps, newProps)=>{
    return prevProps.id === newProps.id
})