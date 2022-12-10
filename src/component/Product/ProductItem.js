import { Link } from "react-router-dom";

import ProductItemButton from "./ProductItemButton";


const ProductItem = (props) =>{


    return(
    <>
   <li className="container mb-5 list-unstyled"> <Link to = {`/store/${props.id}`}>
      
             
               <div className="" style={{display:"flex",flexWrap:'wrap'}}>
                <div className="card" style={{width:"18rem"}}>
                <h4 className="card-title">{props.title}</h4>
                <img src={props.imageUrl} class="card-img-top"
                    alt="Hollywood Sign on The Hill" />
                <div className="card-body">
                <div className="card-title d-flex justify-content-between align-items-center">
                <h5 className="mt-5">{`$${props.price}`}</h5>
                <ProductItemButton key = {props.id} id = {props.id} item = {props}/>
            </div>
       
      </div>
      </div>
      </div>



      </Link> </li> 
    </>
    
    )
}

export default ProductItem;