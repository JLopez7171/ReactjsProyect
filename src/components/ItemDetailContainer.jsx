import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getAsyncItemById } from "../data/database"
import ItemDetail from "./ItemDetail"
import Loader from "./Loader"

function ItemDetailContainer() {
  const [product, setProduct] = useState(null)

  const { id } = useParams()

  useEffect(() => {
    async function getProduct() {
      const data = await getAsyncItemById(id)
      setProduct(data);
    }
    getProduct();
  }, [id]);

  if(product)
    return <ItemDetail {...product} id={id} ></ItemDetail>
  else
    return <Loader />
}

export default ItemDetailContainer
