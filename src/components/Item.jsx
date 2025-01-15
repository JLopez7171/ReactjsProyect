import { Link } from "react-router-dom";


export default function Item(props) {
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