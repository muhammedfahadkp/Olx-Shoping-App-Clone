import React,{useContext} from 'react';
import {useHistory,Link} from 'react-router-dom'

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../Store/Context';
function Header() {

  // to showing user name in header
  const {user} = useContext(AuthContext)

  //to logout function
  const {firebase} = useContext(FirebaseContext)

  //to redirect home
  const history = useHistory()


  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input 
          type="text" 
          placeholder='India'
          />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span>{user ? `Welcome 👋 ${user.displayName}` : 
          (<Link className="LogIn-Link"  to="/login">Login</Link>)}</span>
          <hr />
        </div>
        {user && <span onClick={()=>{
          firebase.auth().signOut()
          history.push('./')
        }} className='logOut'>Log Out</span>}
        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
