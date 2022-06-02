// Style
import { Col, ListGroup } from 'react-bootstrap';
import { mockList } from '../../../dataMock/datamock';
import styles from '../styles/Wallet.module.scss';
import listStyles from '../styles/components/List.module.scss';

const List = () => {
  let getList = mockList.map((transaction) => {
    return (
      <ListGroup.Item className={listStyles.transactionItem}>
        <div className={listStyles.itemDiv}>
          <div className={`${listStyles.transactionIcon}`}>
            <i className={`bi bi-download`}></i>
          </div>
          <div className={listStyles.blockText}>
            <span>Received</span>
            <span>Received at {transaction.time}</span>
          </div>
        </div>
        <div className={listStyles.blockText + ' ' + listStyles.right}>
          <span>+{transaction.coinsAmount} DOGE</span>
          <span>+${transaction.currencyAmount}</span>
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
