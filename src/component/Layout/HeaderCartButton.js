import axios from "axios";
import React,{useContext,useEffect} from "react";
import CartContext from "../../store/CartContext";


const HeaderCartButton =(props)=>{

    const cartctx = useContext(CartContext)


    // let email = localStorage.getItem("email").replace(".","").replace("@","");

    // useEffect(()=>{
    //     axios.get(`https://crudcrud.com/api/a1ddeb5640444fcd8b57187e367fc294/cart${email}`).then((res)=>{
    //        cartctx.initilizeCart(res.data)
    //     })
    // },[])

    let quantity = 0;
    cartctx.items.forEach((item)=>{
        console.log(item ,'----items----')
        // localStorage.setItem("cartitem",item)
        quantity = quantity + Number(item.quantity)
        
    })


    return (
        <>
        <button onClick={props.onShowCart} className="btn btn-light text-reset me-3">
            <span> <i className="fas fa-shopping-cart"   style={{color:"black"}}/></span>
            <span style={{color:"red"}}>{quantity}</span>
        </button>
        </>
    )

}

export default HeaderCartButton