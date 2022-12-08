import { useState } from "react";
import CreateContext from "./CartContext";


const CartProvider =(props)=>{

   const [items, updateItems] = useState([])

    const addItemToCart = (item) =>{
        updateItems([...items, item])

    }

    const removeItemToCart = (id) =>{
        updateItems(items.filter((item) => item.id !==id));

    }


    const cartContext = {
        items: items,
        totalAmount:0,
        addItem:addItemToCart,
        removeItem:removeItemToCart
    }

    return (
        <CreateContext.Provider value ={cartContext}>
            {props.children}
        </CreateContext.Provider>
    )

}

export default CartProvider;