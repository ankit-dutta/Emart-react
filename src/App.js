import React,{useState} from "react";
import {Route ,Switch} from 'react-router-dom';
import Cart from "./component/Cart/Cart";
import Footer from "./component/Layout/Footer";

import Header from "./component/Layout/Header";
import Products from "./component/Product/Products";
import About from "./pages/About";
import Contactus from "./pages/Contactus";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import CartProvider from "./store/CartProvider";


function App() {
  const [cartIsShown ,setCartIsShown] = useState(false);

  const showCartHandler = () =>{
    setCartIsShown(true);
  }

  const hideCartHandler = () =>{
    setCartIsShown(false)
  }
  
  const addQueryHandler = (queryform) =>{
    // console.log(queryform)
    const response = fetch('https://emart-react-default-rtdb.firebaseio.com/contact.json',{
    method:'POST',
    body:JSON.stringify(queryform),
    headers:{
      'content-Type': 'application/json'
    }
    })
  }

  return (

    <CartProvider>

      {/* NAVBAR AND CART ------- */}
     { cartIsShown && <Cart onHideCart = {hideCartHandler} />}

     <Header onShowCart = {showCartHandler} />

        {/* Routes ------ */}
            <main>
              <Switch >
              <Route path = '/' exact>
                <Home />
              </Route>
           


           
              <Route path = '/about' exact>
                <About />
              </Route>
          
          
        
            <Route path = '/store' exact>
              <Products />
            </Route>

            <Route path= '/store/:storeId' exact>
              <ProductDetail />
            </Route>
          
        
            <Route path = '/contact' exact>
              <Contactus onAddQuery = {addQueryHandler} />
            </Route>

            <Route path = '/auth' exact>
              <Login onAddQuery = {addQueryHandler} />
            </Route>
            </Switch>
          </main>
        
   
   {/* Footer--------- */}
   <Footer />
   
    </CartProvider>
  );
}
export default App;