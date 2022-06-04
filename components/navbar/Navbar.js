import { ArrowLeft, WrenchAdjustable } from 'react-bootstrap-icons';

// Styles
import styles from './Navbar.module.scss';

// Redux
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/api/slices/authSlice';

const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    return dispatch(logout());
  };
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className={`${styles.navbarIcons}`}>
          <ArrowLeft onClick={handleLogout} />
        </a>
        <a className={`navbar-brand ${styles.navbarBrand}`}>Dogecoin</a>
        <a className={`${styles.navbarIcons}`}>
          <WrenchAdjustable />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
