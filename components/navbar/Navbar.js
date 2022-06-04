import { ArrowLeft, WrenchAdjustable } from 'react-bootstrap-icons';

// Styles
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className={`${styles.navbarIcons}`}>
          <ArrowLeft />
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
