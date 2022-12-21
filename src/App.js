import React,{useContext, useEffect, useState} from "react";
import {Redirect, Route ,Switch} from 'react-router-dom';
import Cart from "./component/Cart/Cart";
import Footer from "./component/Layout/Footer";
import axios from "axios";
import Header from "./component/Layout/Header";
import Products from "./component/Product/Products";
import About from "./pages/About";
import Contactus from "./pages/Contactus";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import AuthContext from "./store/auth-context";
import CartContext from "./store/CartContext";
import CartProvider from "./store/CartProvider";


function App() {

  const cartctx = useContext(CartContext)

  if(!localStorage.getItem("email")){
    localStorage.setItem("email","");
    
  }

  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn

  let email = localStorage.getItem("email").replace(".","").replace("@","");

  const [cartIsShown ,setCartIsShown] = useState(false);

  const showCartHandler = () =>{
    setCartIsShown(true);
  }

  const hideCartHandler = () =>{
    setCartIsShown(false)
  }
   useEffect(()=>{
    if(!email) return;
    
   axios.get(`https://crudcrud.com/api/a1ddeb5640444fcd8b57187e367fc294/cart${email}`)
   .then((res)=>{
    const data = res.data;
    for(const key in data){
      const item = data[key];
      item.id = key
      cartctx.mapId(item);
    }
   }).catch((err)=>{
    alert(err);
   })
         
   },[email,cartctx])
  
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
           


              {isLoggedIn &&
                 <Route path = '/about' exact>
                 <About />
               </Route>

              }
             
          
          
          {isLoggedIn &&
            <Route path = '/store' exact>
            <Products />
          </Route>
          }
            
          {isLoggedIn &&
            <Route path= '/store/:storeId' exact>
            <ProductDetail />
            </Route>
          }
            
          
          {isLoggedIn &&
            <Route path = '/contact' exact>
            <Contactus onAddQuery = {addQueryHandler} />
             </Route>
          }
            

            <Route path = '/auth' exact>
              <Login onAddQuery = {addQueryHandler} />
            </Route>

            <Route path='*'>
              <Redirect to = "/"></Redirect>
            </Route>

            </Switch>

          </main>
        
   
   {/* Footer--------- */}
   <Footer />
   
    </CartProvider>
  );
}
export default App;