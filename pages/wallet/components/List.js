// Components
import { Col, ListGroup } from 'react-bootstrap';

// Style
import styles from '../styles/Wallet.module.scss';
import listStyles from '../styles/components/List.module.scss';
import { Download, Upload } from 'react-bootstrap-icons';

// Redux
import { useSelector } from 'react-redux';

// Utils
import dataFormatter, {
  isToday,
  isYesterday,
} from '../../../utils/dateFormatter.js';
const List = () => {
  const { list } = useSelector((state) => state.transactions);

  let transactionsList = list?.data || [];

  let getList = transactionsList.map((transaction, i) => {
    let date = transaction?.timestamp;
    return (
      <div key={i}>
        <ListGroup.Item
          className={`textColorOpacity boldText ${listStyles.transactionItem} ${listStyles.item_header}`}
        >
          Received at {dataFormatter(date, 'MMMM d, YYYY')}
          {isToday(date) ? ' - Today' : isYesterday(date) ? ' - Yesterday' : ''}
        </ListGroup.Item>
        <ListGroup.Item
          className={`${listStyles.transactionItem} ${listStyles.item_body}`}
        >
          <div className={listStyles.itemDiv}>
            <div className={`${listStyles.transactionIcon}`}>
              {transaction?.type === 'Sent' ? <Upload /> : <Download />}
            </div>
            <div className={listStyles.blockText}>
              <span className="defaultText boldText">{transaction?.type}</span>
              <span className="defaultText textColorOpacity">
                {transaction?.type} at {dataFormatter(date, 'hh:mm A')}
              </span>
            </div>
          </div>
          <div className={listStyles.blockText + ' ' + listStyles.right}>
            <span className="defaultTextPlus">+{transaction?.amount} DOGE</span>
            <span className="defaultTextPlus">+${transaction?.amount}</span>
          </div>
        </ListGroup.Item>
      </div>
    );
  });
  return (
    <Col
      xs={12}
      lg={12}
      className={`noPadding ${listStyles.sectionContainer} ${styles.sectionMargin}`}
    >
      <ListGroup>{getList}</ListGroup>
    </Col>
  );
};

export default List;
