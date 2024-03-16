import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
        <img
              src="https://i.pinimg.com/originals/67/ee/bc/67eebcdfc84c43813db1be4236e48418.jpg"
              alt="logo"
              style={{ height: '50px', width: 'auto' }}
            />
        <h5 style={{ color: 'whitesmoke' }}>Cart System</h5>
       
            <Link to="/">
              <h6 style={{  marginRight:'50vh'  }}>Products</h6>        
          </Link>
          
          
          <form className="d-flex">
            <input className="form-control me-sm-2" type="search" placeholder="Search" />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
          
          <Link to="/cart" className="nav-link ">
            <ShoppingCartIcon style={{ color: 'whitesmoke' }} />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
