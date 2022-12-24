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
            
        <div className={classes.navcontainer} >
            <ul className={classes.navelements} style={{}}>


              
                    
                
                {/* {isLoggedIn &&  */}
                   <li>
                   <NavLink to = '/' className={classes.navbtns}>HOME</NavLink>                   
                  </li>
                {/* } */}

                {/* {isLoggedIn &&  */}
                  <li>
                  <NavLink to = '/store' className={classes.navbtns}>STORE</NavLink>                   
                  </li>
                {/* } */}
                  
                
                {/* {isLoggedIn &&  */}
                     <li>
                     <NavLink to = '/about' className={classes.navbtns}>ABOUT</NavLink>                   
                     </li>
                {/* } */}
                   
                {/* {isLoggedIn && */}
                    <li>
                    <NavLink to = '/contact' className={classes.navbtns}>Contact Us</NavLink>                   
                    </li>
                {/* } */}

                {!isLoggedIn && 
                   <button className={classes.loginbtn}>
                    
                   <NavLink to = '/auth' className={classes.loginbtn}>Login</NavLink>                   
                  </button>
                }
                
                

                
            </ul>
        </div>

        <div style={{marginLeft:"40%"}}>
        {isLoggedIn && 
         <HeaderCartButton onShowCart = {props.onShowCart} />
        }

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