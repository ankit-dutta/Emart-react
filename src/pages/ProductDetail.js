import { useParams } from "react-router-dom"
import classes from './ProductDetail.module.css';
import CartContext from "../store/CartContext";
import { useContext } from "react";

const ProductDetail = (props)=>{
    const params = useParams()
    const cartctx = useContext(CartContext)
    const existingitem = [cartctx.items];

    console.log(existingitem ,'existingitem')



        return(
            <>
            {/* <h1>this is productdetail page</h1> */}
                {/* <h3>{params.storeId}</h3> */}
               
            {cartctx.items.map((el)=>{
              return(
                <>
                <h1>{el.title}</h1>
                </>
              )
            })}
               
        <section className={classes.section}>
            <h5>{props.title}</h5>
          <img
            src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
            alt="Website"
            className={classes.img}
          ></img>
          <div>
  
          <h3 className={classes.reviews}> Reviews </h3>
          <p className={classes.reviews}> @yushi216 </p>
          <p>⭐⭐⭐⭐</p>
          <p> Great product. Must buy</p>
          <p className={classes.reviews}> rhea43 </p>
          <p>⭐⭐</p>
          <p> Do not buy this</p>
          <p className={classes.reviews}> aryanshi178 </p>
          <p>⭐⭐⭐⭐</p>
          <p> Excellent will buy again</p>
         
          </div>
          {/* <h1>More products like this</h1> */}
        </section>
  
        <h1 className={classes.title}>COLOURS</h1>
      
            </>
        )
}
export default ProductDetail