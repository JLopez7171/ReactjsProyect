import { useState, useEffect } from 'react'
import Item from "./Item"
import getAsyncData from '../data/getAsyncData'
import { useParams } from 'react-router-dom'

export default function ItemListContainer(props){

    const [musicProducts, setMusicProducts]= useState([])
    const {catid} = useParams
    useEffect(() => {

        if (catid === undefined) {

          const respuestaPromise = getAsyncData()
          respuestaPromise.then((respuesta) => setMusicProducts(respuesta)).catch((error) => alert(error))

        } else {

          const respuestaPromise = getAsyncItemsByCategory(catid)
          respuestaPromise.then((respuesta) => setMusicProducts(respuesta)).catch((error) => alert(error))

        }

      }, [])

    useEffect(()=>{
        const apiResponse= getAsyncData()
    apiResponse.then(resp=>setMusicProducts(resp))
    }, [])

    const list = musicProducts.map(prod => <Item
    
         key={prod.id}
         id={prod.id} 
         title={prod.title}
          price={prod.price}    
          img={prod.img} 
          category={prod.category}
          ></Item>)

    return(

        <div className='cardContainer'>

             {list}

        </div>
            

    )
}