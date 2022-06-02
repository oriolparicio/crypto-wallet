// Style
import { Col } from 'react-bootstrap';
import styles from '../styles/Wallet.module.scss';

const Graphics = () => {
  return (
    <Col
      xs={12}
      className={`noPadding ${
        styles.sectionContainer + ' ' + styles.sectionMargin
      }`}
    >
      Graphs
    </Col>
  );
};

export default Graphics;
