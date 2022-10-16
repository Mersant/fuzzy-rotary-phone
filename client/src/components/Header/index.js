import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';



const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

return (
  <header class="bg-primary text-light mb-4 py-3 flex-row align-center">
    <div class="container flex-row justify-space-between-lg justify-center align-center">
      <div class= "container">
        <Link class="text-light" to="/">
          <h1 class="m-0">Journal</h1>
        </Link>
      </div>
      <div class= "">
      {Auth.loggedIn() ? (
            <>
              {/* <span>Hello {Auth.getProfile().data.username}!</span> */}
              <button class="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
              <>
              <Link class="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link class="btn btn-lg btn m-2" to="/signup">
                Sign up
              </Link>
              <Link class="btn btn-lg btn m-2" to="/journal">
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





