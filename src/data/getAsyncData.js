import musicProducts from "./data";

 function getAsyncData(){
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
  console.log("Solitando producto id....", itemID)
  
  const promiseData = new Promise( (resolve) => {    

    setTimeout( () => {      
      const requestedProduct = musicProducts.find( (item) => item.id === Number(itemID))
      resolve(requestedProduct)
    }, 500)     
  })

  console.log("Promesa generada.")

  return promiseData;
}

  export function getAsyncItemsByCategory(catID) {

    const promiseDataCat = new Promise( (resolve) => {    
  
      setTimeout( () => {      
        const requestedProduct = musicProducts.filter( (item) => item.category.toLowerCase() === catID.toLowerCase())
        resolve(requestedProduct)
      }, 500)     
    })
  
    console.log("Promesa generada.")
  
    return promiseDataCat;
  }

export default getAsyncData