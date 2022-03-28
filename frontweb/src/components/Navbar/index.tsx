import './styles.css';
import 'bootstrap/js/src/collapse.js';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
      <div>
        
        <Link to='/'  className="nav-logo-text">
          <h4>Movieflix</h4>
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
