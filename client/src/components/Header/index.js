import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Header.css'
import Auth from '../../utils/auth';



const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

return (
  <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
    <div className="container flex-row justify-space-between-lg justify-center align-center">
      <div className= "container">
        <Link className="text-light" to="/">
          <h1 className="m-0">Letters to Quandale</h1>
        </Link>
      </div>
      <div id='headerButtonsContainer'>
      {Auth.loggedIn() ? (
            <>
              {/* <span>Hello {Auth.getProfile().data.username}!</span> */}
              <button class="btn btn-lg btn-light m-2 headerButton" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
              <>
              <Link className="btn btn-lg btn-info m-2 headerButton" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn m-2 headerButton" to="/signup">
                Sign up
              </Link>
              <Link className="btn btn-lg btn m-2 headerButton" to="/journal">
                Journal
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
 );
};

export default Header;





