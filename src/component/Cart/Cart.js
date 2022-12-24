import axios from "axios"
import { useContext ,useState} from "react"
import CartContext from "../../store/CartContext"
import Modal from "../UI/Modal"
import './Cart.css'



const Cart = (props) =>{
    const [cartItem, setCartItem] = useState([]);
    const [quantity, setQuantity] = useState(); 

    let email = localStorage.getItem("email").replace(".","").replace("@","");
    const cartctx = useContext(CartContext);
    const existingItems = [...cartctx.items]



   const removeFromCart =(id)=>{
     cartctx.removeItem(id);
     axios.delete(`https://crudcrud.com/api/a1ddeb5640444fcd8b57187e367fc294/cart${email}/${id}`)
    //  console.log(id)
   setCartItem(cartItem => 
      cartItem.map((item) => id === item.id ? {...item, quantity:item.quantity - 1}:item
      )
    );
    }

    const addToCart =(item)=>{
        // console.log(item.id)
        const itemIdx = existingItems.findIndex((i) => i.id === item.id)
        const updatedList = existingItems[itemIdx].quantity++;
        setQuantity(updatedList)
        cartctx.addItem(props)
        
        
    }


    const cartElements = (<ul className='cart-items overflow-y-scroll'>{
       cartctx.items.map((item) =>(
                <div className="listcontainer container overflow-y-scroll inner-box">
                    <li className="cart-items d-flex justify-content-between " >
                        {/* <div className="d-flex "> */}

                            <div className="d-flex">
                                <img className="inside-cart-img"  style={{height:"50px",width:"50px"}} src={item.imageUrl} />
                                <h4>{item.title}</h4>
                            </div>
                        
                            <div className=" itemlistcontainer ">
                                <div >
                                <input value={item.quantity} style={{width:'30px'}} />&nbsp; &nbsp; &nbsp;
                                <span>${item.price}</span>
                                </div>
                                <div>
                                <button className="btn btn-info" onClick={()=>addToCart(item)}>Add</button>&nbsp; &nbsp;

                                <button className="btn btn-danger" type="submit" onClick={()=>removeFromCart(item.id)}>Remove</button>
                                </div>
                                
                            </div>
                        
                              
                    </li>
            </div>
       ))
       }
       </ul>
       );

       let totalAmt = 0;
       cartctx.items.forEach((item)=>{
        totalAmt += Number((item.price)*(item.quantity))
       })

    return(
        <Modal onHideCart = {props.onHideCart}>
                <div >
                    <div >
                        <button className="mb-5  btn btn-danger" onClick={props.onHideCart}>Close</button>
                    </div>

                    <div style={{height:"40%"}}>
                    {cartElements}
                    </div>
                
            
                    <div className="d-flex justify-content-between mt-5">
                    
                        <div className="text-uppercase fw-bolder fs-4">
                            <span><u>Total Amount</u></span><br />
                            <span>${totalAmt.toFixed(2)}</span>
                        </div>

                        <div>
                            <button className="btn btn-success">Purchase</button>
                        </div>
                    </div>
                </div>
        </Modal>
    )
}

export default Cart;