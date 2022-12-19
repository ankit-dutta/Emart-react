import classes from './Header.module.css';
import emartImage from '../../assets/emartimage.avif';
import HeaderCartButton from './HeaderCartButton';
import {NavLink, useHistory} from 'react-router-dom'
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';

const Header = (props) =>{
   const authCtx =  useContext(AuthContext)

   const isLoggedIn = authCtx.isLoggedIn
    return(
        <>
        <header className={classes.header}>
            <h1>Emart</h1>
            
        <div >
            <ul className='fw-bolder' style={{display:"flex" ,justifyContent:"space-between",width:"200%",listStyle:"none", marginTop:"14px"}}>
               
                   <li>
                   <NavLink to = '/auth'>Login</NavLink>                   
               </li>
                

                
                    <li>
                    <NavLink to = '/'>HOME</NavLink>                   
                   </li>
                

               
                
                <li>
                <NavLink to = '/store'>STORE</NavLink>                   
                 </li>
          
                

               
                 <li>
                 <NavLink to = '/about'>ABOUT</NavLink>                   
                 </li>
                
           
          
                <li>
                <NavLink to = '/contact'>Contact Us</NavLink>                   
            </li>
           
           
               
               

                
            </ul>
        </div>

        <div style={{marginLeft:"40%"}}>
       <HeaderCartButton onShowCart = {props.onShowCart} />

       {/* {isLoggedIn && 
        <button>Logout</button>
        } */}
        </div>

     
        </header>


        <div className={classes['main-image']}>
            <img src={emartImage} alt ="emart image" />
        </div>
        </>
    )
}

export default Header;