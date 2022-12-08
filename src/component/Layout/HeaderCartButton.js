import React,{useContext} from "react";
import CartContext from "../../store/CartContext";


const HeaderCartButton =(props)=>{

    const cartctx = useContext(CartContext)

    let quantity = 0;
    cartctx.items.forEach((item)=>{
        console.log(item ,'----items----')
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