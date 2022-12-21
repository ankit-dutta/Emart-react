import axios from "axios";
import { useState } from "react";
import CreateContext from "./CartContext";


const CartProvider =(props)=>{
   let email = localStorage.getItem("email").replace(".", "").replace("@", "");

   const [items, updateItems] = useState([])



    const addItemToCart = (item) =>{
        updateItems([...items, item])

        let arr = [...items]

        let flag = false;
        items.forEach((ele, index)=>{
            if(ele.id === item.id){
                arr[index].quantity = Number(item.quantity)+ Number(arr[index].quantity);
                flag = true;
                
                let {id, ...updatedData} = arr[index];

                axios.put(`https://crudcrud.com/api/a1ddeb5640444fcd8b57187e367fc294/cart${email}/${arr[index].id}`,updatedData).then((res)=>{
                    console.log(res.data)
                }).catch((err)=>{
                    alert(err)
                })
            }
        });

        if(flag === false){
            axios.post(`https://crudcrud.com/api/a1ddeb5640444fcd8b57187e367fc294/cart${email}`,{...item , quantity:1}).then((res)=>{
                arr.push(res.data);
                updateItems(arr);
            })
            .catch((err)=>{
                alert(err)
            })
        }

    }

    const removeItemToCart = (id) =>{
        updateItems(items.filter((item) => item.id !==id));

    }

    const initializeCartHandler = (items)=>{
        updateItems(items)
    }

    const mapIdHandler = (id)=>{
        items.id = id
    }


    const cartContext = {
        items: items,
        totalAmount:0,
        addItem:addItemToCart,
        removeItem:removeItemToCart,
        initilizeCart:initializeCartHandler,
        mapId:mapIdHandler
    }

    return (
        <CreateContext.Provider value ={cartContext}>
            {props.children}
        </CreateContext.Provider>
    )

}

export default CartProvider;