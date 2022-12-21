import classes from './Header.module.css';
import emartImage from '../../assets/emartimage.avif';
import HeaderCartButton from './HeaderCartButton';
import {NavLink, useHistory} from 'react-router-dom'
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';

const Header = (props) =>{
   const authCtx =  useContext(AuthContext)
   const history  = useHistory()

   const isLoggedIn = authCtx.isLoggedIn

   const logoutHandler = () =>{
        authCtx.logout();
        history.replace('/auth')
   }


    return(
        <>
        <header className={classes.header}>
            <h1>Emart</h1>
            
        <div >
            <ul className='fw-bolder' style={{display:"flex" ,justifyContent:"space-between",width:"200%",listStyle:"none", marginTop:"14px"}}>


                {!isLoggedIn && 
                   <li>
                   <NavLink to = '/auth'>Login</NavLink>                   
                  </li>
                }
                    
                
                {isLoggedIn && 
                   <li>
                   <NavLink to = '/'>HOME</NavLink>                   
                  </li>
                }

                {isLoggedIn && 
                  <li>
                  <NavLink to = '/store'>STORE</NavLink>                   
                  </li>
                }
                  
                
                {isLoggedIn && 
                     <li>
                     <NavLink to = '/about'>ABOUT</NavLink>                   
                     </li>
                }
                   
                {isLoggedIn &&
                    <li>
                    <NavLink to = '/contact'>Contact Us</NavLink>                   
                    </li>
                }
                
                

                
            </ul>
        </div>

        <div style={{marginLeft:"40%"}}>
       <HeaderCartButton onShowCart = {props.onShowCart} />

       {isLoggedIn && 
        <button onClick={logoutHandler}>Logout</button>
        }
        </div>

     
        </header>


        <div className={classes['main-image']}>
            <img src={emartImage} alt ="emart image" />
        </div>
        </>
    )
}

export default Header;