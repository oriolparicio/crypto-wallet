// Components
import { Col, ListGroup } from 'react-bootstrap';

// Style
import styles from '../styles/Wallet.module.scss';
import listStyles from '../styles/components/List.module.scss';

// Redux
import { useSelector } from 'react-redux';

const List = () => {
  const { list } = useSelector((state) => state.transaction);
  let getList = list?.data?.map((transaction, i) => {
    return (
      <ListGroup.Item key={i} className={listStyles.transactionItem}>
        <div className={listStyles.itemDiv}>
          <div className={`${listStyles.transactionIcon}`}>
            <i className={`bi bi-download`}></i>
          </div>
          <div className={listStyles.blockText}>
            <span>Received</span>
            <span>Received at {transaction?.timestamp}</span>
          </div>
        </div>
        <div className={listStyles.blockText + ' ' + listStyles.right}>
          <span>+{transaction?.amount} DOGE</span>
          <span>+${transaction?.amount}</span>
        </div>
      </ListGroup.Item>
    );
  });
  return (
    <Col
      xs={12}
      className={`noPadding ${
        styles.sectionContainer + ' ' + styles.sectionMargin
      }`}
    >
      <ListGroup>{getList}</ListGroup>
    </Col>
  );
};

export default List;
