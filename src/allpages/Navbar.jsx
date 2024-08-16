import React, { useState } from 'react';
import LG from '../assets/logo.png';
import { Link } from 'react-router-dom';
import ToggleSwitch from '../allpages/Toogleswitch'
import'../allpages/css/Navbar.css';

function NavScrollExample() {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    setShowLogin(prevState => !prevState); // Toggle login form visibility
  };

  return (
    <>
  
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><img src={LG} alt="Logo" /></Link>
          <div className=' toggle-switch'>
            <ToggleSwitch />
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            </ul>
            <div className="d-flex align-items-center">
              <ul className='list-unstyled d-flex mb-2 mb-lg-0'>
                <li>
                  <a href="/" onClick={handleLoginClick} aria-label="Toggle Login Form">
                    <button className='btn btn-outline-warning'>Login</button>
                  </a>
                </li>
                <li><Link to="/cart"><i className="fs-2 text-white bi bi-cart4 px-3"></i></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {showLogin && (
        <div className="login-form-container">
        
        </div>
        
      )}

    </>
  );
}

export default NavScrollExample;
