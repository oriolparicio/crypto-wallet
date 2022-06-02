// Components
import Button from '../../../components/button/Button';
// Style
import styles from '../styles/Wallet.module.scss';
import btnStyles from '../../../components/button/Button.module.scss';
import { ButtonGroup, Col, Row } from 'react-bootstrap';

const Buttons = () => {
  return (
    <Col xs={12} className={`noPadding ${styles.sectionMargin}`}>
      <ButtonGroup className={`${btnStyles.btnGroup}`}>
        <Button>Send</Button>
        <Button>Receive</Button>
      </ButtonGroup>
    </Col>
  );
};

export default Buttons;
