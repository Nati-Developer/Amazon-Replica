import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import HeaderLogo from '../Resource/image/amazon_PNG11.png';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../Utils/UseStateProvider';
import { auth } from '../../Utils/firebase';

function Header() {
  const [{ basket, user}, dispatch] = useStateValue();
  const handleAutentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  const basketCount = basket?.length || 0; // Check if basket is defined before accessing its length
  return (
    <div className='header'>
      <Link to='/'>
        <img className='header_logo' src={HeaderLogo} alt='logo' />
      </Link>
      <div className='header_search'>
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className='header_nav'>
        <div onClick={handleAutentication} className='header_option'>
          <span className="header_optionLineOne"> 
           Hello {!user ? "Guest" : user?.email}
           </span>
          <Link to={!user && "/login"}>
          <span className="header_optionLineTwo"> 
          {user ? "Sign Out" : "Sign In"}
          </span>
          </Link>
        
        </div>
        <div className='header_option'>
          <span className="header_optionLineOne">Return</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>
        <div className='header_option'>
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <Link to='/checkout'>
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_basketCount">
              {basketCount}
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header;
