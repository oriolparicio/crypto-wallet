import { useState } from 'react';
// Components
import Button from '../../../components/button/Button';
import { ButtonGroup, Col } from 'react-bootstrap';

// Style
import styles from '../styles/Wallet.module.scss';
import btnStyles from '../../../components/button/Button.module.scss';
import CustomModal from '../../../components/customModal/CustomModal';

const Buttons = () => {
  const [modalShow, setModalShow] = useState(false);

  const handleModal = () => {
    return setModalShow(true);
  };
  return (
    <Col xs={12} className={`noPadding ${styles.sectionMargin}`}>
      <ButtonGroup className={`${btnStyles.btnGroup}`}>
        <Button onClickEvent={handleModal}>Send</Button>
        <Button>Receive</Button>
      </ButtonGroup>
      <CustomModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        title="Sending to..."
        fields={[
          { name: 'address', type: 'text' },
          { name: 'amount', type: 'text' },
        ]}
        btnname="Send"
        type="send"
      />
    </Col>
  );
};

export default Buttons;
