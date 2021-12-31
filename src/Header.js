import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import MenuIcon from '@material-ui/icons/Menu';

const Header = ({ lower_display_none }) => {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <>
      <div className='header'>
        <Link to='/'>
          <img
            className='header__logo'
            src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
          />
        </Link>

        <div className='header__search'>
          <input
            className='header__searchInput'
            type='text'
            placeholder='Enter your search Query'
          />
          <SearchIcon className='header__searchIcon' />
        </div>

        <div className='header__nav'>
          <Link to={!user && '/login'} style={{ textDecoration: 'none' }}>
            <div onClick={handleAuthentication} className='header__option'>
              <span className='header__optionLineOne'>Hello {user?.email}</span>
              <span className='header__optionLineTwo'>
                {user ? 'Sign Out' : 'Sign In'}
              </span>
            </div>
          </Link>

          <div className='header__option'>
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineTwo'>& Orders</span>
          </div>
          <div className='header__option'>
            <span className='header__optionLineOne'>Your</span>
            <span className='header__optionLineTwo'>Prime</span>
          </div>
          <Link to='/checkout' style={{ textDecoration: 'none' }}>
            <div className='header__optionBasket'>
              <ShoppingBasketIcon />
              <span className='header__optionLineTwo header__basketCount'>
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* Bottom navbar */}
      <div className={`bottom_nav ${lower_display_none ? 'hide' : ''}`}>
        <p className='flex mr-5'>
          <MenuIcon className='mr' />
          All
        </p>
        <p className='mr-5'>Prime Video</p>
        <p className='mr-5'>Today's Deal</p>
        <p className='mr-5'>Gift Cards</p>
        <p className='mr-5'>Best Sellers</p>
        <p className='mr-5'>Mobiles</p>
        <p className='mr-5'>Customer Service</p>
        <p className='mr-5'>Electronics</p>
        <p className='mr-5'>Fashion</p>
      </div>
    </>
  );
};

export default Header;
