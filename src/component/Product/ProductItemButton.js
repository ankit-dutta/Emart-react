import { useContext } from "react";
import CartContext from "../../store/CartContext";
import Input from "../UI/Input";

const ProductItemButton =(props) =>{

    const cartctx = useContext(CartContext);

    const addItemToCart = (event) =>{
        event.preventDefault();

        const quantity = document.getElementById('amount_' +props.id).value;
        console.log(quantity, 'quantity');

        cartctx.addItem({...props.item, quantity: quantity})

    }


    return (
        <>
        <form>
            <div style={{visibility:"hidden"}} >
        <Input label ="Quantity" input = {
            {  id:'amount_'+props.id,
               type:"number",
               min: '1',
                max:'5',
                step:'1',
                defaultValue:'1'}} />
                </div>

        <button className="btn btn-primary" onClick={addItemToCart}>Add to cart</button>

        </form>
        </>
    )
}

export default ProductItemButton;