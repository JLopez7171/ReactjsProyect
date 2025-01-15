import musicProducts from "./data";

export default function getAsyncData(){
    const promiseData= new Promise((resolve, reject)=>{
        const errorFatal=false
        setTimeout(()=>{
            if(errorFatal) reject("Error")
            
            resolve(musicProducts)

        }, 200)
    }) 
    
    return promiseData
}
export function getAsyncItemById(itemID) {
    
    const promiseData = new Promise( (resolve) => {    
  
      setTimeout( () => {      
        const requestedProduct = musicProducts.find( (item) => item.id === Number(itemID))
        resolve(requestedProduct)
      }, 500)     
    })

    return promiseData;
  }

  export function getAsyncItemsByCategory(catID) {

    const promiseData = new Promise( (resolve) => {    
  
      setTimeout( () => {      
        const requestedProduct = products.filter( (item) => item.category.toLowerCase() === catID.toLowerCase())
        resolve(requestedProduct)
      }, 500)     
    })
  
    console.log("Promesa generada.")
  
    return promiseData;
  }
