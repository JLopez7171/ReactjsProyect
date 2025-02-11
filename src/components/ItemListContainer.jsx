import { useState, useEffect } from 'react'
import Item from "./Item"
import getAsyncData from '../data/database'
import { getAsyncItemsByCategory } from '../data/database'
import { useParams } from 'react-router-dom'
import Loader from './Loader'

export default function ItemListContainer(props){

    const [musicProducts, setMusicProducts]= useState([])
    const {catid} = useParams()


    useEffect(() => {

        if (!catid) {

          const respuestaPromise = getAsyncData()
          respuestaPromise.then((respuesta) => setMusicProducts(respuesta)).catch((error) => alert(error))

        } else {

          const respuestaPromise = getAsyncItemsByCategory(catid)
          respuestaPromise.then((respuesta) => setMusicProducts(respuesta)).catch((error) => alert(error))

        }

      }, [catid])

    const list = musicProducts.map(prod => <Item
    
         key={prod.id}
         id={prod.id} 
         title={prod.title}
          price={prod.price}    
          img={prod.img} 
          category={prod.category}
          ></Item>)
          
 if(musicProducts)
    return(

        <div className='cardContainer'>

          {list}

        </div>
            

    )
  else
    return <Loader />
}