import classes from './Header.module.css';
import emartImage from '../../assets/emartimage.avif';
import HeaderCartButton from './HeaderCartButton';


const Header = (props) =>{
    return(
        <>
        <header className={classes.header}>
            <h1>Emart</h1>
            
        <div >
            <ul className='fw-bolder' style={{display:"flex" ,justifyContent:"space-between",width:"200%",listStyle:"none", marginTop:"14px"}}>
                <li>HOME</li>
                <li>STORE</li>
                <li>ABOUT</li>
            </ul>
        </div>

        <div style={{marginLeft:"40%"}}>
       <HeaderCartButton onShowCart = {props.onShowCart} />
        </div>
        </header>


        <div className={classes['main-image']}>
            <img src={emartImage} alt ="emart image" />
        </div>
        </>
    )
}

export default Header;