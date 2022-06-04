// Redux
import { useSelector } from 'react-redux';

// Components
import { Col, Placeholder, Row } from 'react-bootstrap';
import LineChart from '../../../components/charts/LineChart';
import { EyeSlash } from 'react-bootstrap-icons';

// Style
import styles from '../styles/Wallet.module.scss';

// Utils
import isStatusFulfilled from '../../../utils/isStatusFulfilled';

const Graphics = () => {
  const { status } = useSelector((state) => state.transactions);
  let data = [100, 110, 120, 130, 140, 150, 160, 170];
  let dates = [
    '2022-05-28',
    '2022-05-29',
    '2022-05-30',
    '2022-05-31',
    '2022-06-01',
    '2022-06-02',
    '2022-06-03',
    '2022-06-04',
  ];
  return (
    <Col
      xs={11}
      lg={12}
      className={`noPadding ${styles.sectionContainer} ${styles.sectionMargin}`}
    >
      <Row className="m-0">
        <Col
          className={`d-flex justify-content-between ${styles.graphTitleWrap}`}
        >
          <div>
            <h3 className="titleText">{data[data.length - 1]} DOGE</h3>
            <h4 className="subTitleText textColorOpacity">
              ${data[data.length - 1]}
            </h4>
            <h4 className="subTitleText testColorPrimary">{`(+${
              data[data.length - 1]
            } DOGE)`}</h4>
          </div>
          <EyeSlash />
        </Col>
      </Row>
      {isStatusFulfilled(status) ? (
        <LineChart data={data} dates={dates} type="line" />
      ) : (
        <Placeholder xs={12} style={{ height: '300px' }} />
      )}
    </Col>
  );
};

export default Graphics;
