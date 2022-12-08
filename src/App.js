import React,{useState} from "react";
import Cart from "./component/Cart/Cart";
import Footer from "./component/Layout/Footer";

import Header from "./component/Layout/Header";
import Products from "./component/Product/Products";
import CartProvider from "./store/CartProvider";


function App() {
  const [cartIsShown ,setCartIsShown] = useState(false);

  const showCartHandler = () =>{
    setCartIsShown(true);
  }

  const hideCartHandler = () =>{
    setCartIsShown(false)
  }
  
  return (
    <CartProvider>
     { cartIsShown && <Cart onHideCart = {hideCartHandler} />}

     <Header onShowCart = {showCartHandler} />
   
   <main>
    <Products />
   </main>
 
   
   <Footer />
   
    </CartProvider>
  );
}
export default App;