import './styles.css';
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { getTokenData, isAuthenticated } from 'util/auth';
import { removeAuthData } from 'util/storage';
import history from 'util/history';
import { AuthContext } from 'AuthContext';

const Navbar = () => {
  const { authContextData, setAuthContextData } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthContextData({
        authenticated: false,
      });
    }
  }, [setAuthContextData]);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthContextData({
      authenticated: false,
    });
    history.replace('/home');
  };

  console.log('Email: ', authContextData.tokenData?.user_name);

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
      <div >
        <Link to="/home" className="nav-logo-text">
          <h4>Movieflix</h4>
        </Link>
      </div>
      <div className="nav-login-logout">
        {authContextData.authenticated ? (
          <>
            <span className="nav-username">
              {authContextData.tokenData?.user_name}
            </span>
            <a href="#logout" onClick={handleLogoutClick} className="btn-sair">
              Sair
            </a>
          </>
        ) : (
          <Link to="/home" className='btn-login'>Login</Link>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
