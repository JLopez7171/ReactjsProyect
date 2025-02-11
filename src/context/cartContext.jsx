import {createContext, useState } from "react";

 const cartContext = createContext("carrito")

export function CartContextProvider(props){
    const [cartItems, setCartItems]= useState([])

    function getTotalPrice(){
        let totalPrice=0
        cartItems.forEach((item)=>{
            totalPrice += item.count * item.price
        })
        return totalPrice
    }


    function countItemsInCart(){
        let total=0
        cartItems.forEach((item)=>{
            total += item.count
        })
        return total
    }
    function addItem({id, title, price, count}){
        const copyCartItems = [...cartItems]
        copyCartItems.push({
            id: id,
            title: title,
            price: price,
            count: count})
        setCartItems(copyCartItems)
    }
    function removeItem(id){
        const newCartState = cartItems.filter(item=>item.id !== id)
        setCartItems(newCartState)
    }
    function clearCart(){
        setCartItems([]);        
    }

    return(
        <cartContext.Provider value=
        {{name: "CartContext",
         cartItems,
         countItemsInCart,
         addItem,
         removeItem,
         clearCart,
         getTotalPrice,
         }}>

            {props.children}
        </cartContext.Provider>
    )
 }

 export default cartContext