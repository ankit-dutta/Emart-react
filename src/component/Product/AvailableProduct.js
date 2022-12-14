import axios from "axios";
import React, { useContext, useEffect } from "react";
import CartContext from "../../store/CartContext";
import Cart from "../Cart/Cart";
import Card from "../UI/Card";
import ProductItem from "./ProductItem";


const productsArr = [

    {
    id:'a1',
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
        id:'a2',
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
        id:'a3',
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
        id:'a4',
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ]

   

const AvailableProduct = () =>{
    const cartctx = useContext(CartContext);

    let email = localStorage.getItem("email").replace(".","").replace("@","");

    useEffect(()=>{
        axios.get(`https://crudcrud.com/api/a1ddeb5640444fcd8b57187e367fc294/cart${email}`).then((res)=>{
           cartctx.initilizeCart(res.data)
        })
    },[])


    const productlist = productsArr.map((item)=>(
        <>
        <div style={{display:"flex"}}>
        <ProductItem key = {item.id} id ={item.id} title = {item.title} imageUrl = {item.imageUrl} price = {item.price} />
     </div>
    </>
    
    ))

            return (
                <>
                <center>
                <Card>
                    <ul style={{display:"flex",border:"1px solid red",width:"70%" ,justifyContent:'space-evenly' ,flexWrap:"wrap"}}>
                        {productlist}
                    </ul>

                    </Card>
                    </center>
                
                
                </>
            )
    }

    export default AvailableProduct;