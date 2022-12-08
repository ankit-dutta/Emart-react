import React from "react";
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
    const productlist = productsArr.map((item)=>(
        <>
        <div style={{display:"flex"}}>
        <ProductItem key = {item.id} title = {item.title} imageUrl = {item.imageUrl} price = {item.price} />
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