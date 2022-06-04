import Head from 'next/head';
// Components
import { Placeholder, Row } from 'react-bootstrap';
import Graphics from './components/Graphics';
import Buttons from './components/Buttons';
import List from './components/List';

// Redux
import { useSelector } from 'react-redux';

// Utils
import isStatusFulfilled from '../../utils/isStatusFulfilled';

// Styles
import styles from './styles/Wallet.module.scss';
import Navbar from '../../components/navbar/Navbar';

const Wallet = () => {
  const { status } = useSelector((state) => state.transactions);

  return (
    <Row className={styles.walletContainer}>
      <Head>
        <title>Degecoin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Graphics />
      <Buttons />
      {isStatusFulfilled(status) ? (
        <List />
      ) : (
        <>
          <Placeholder xs={12} />
          <Placeholder xs={12} />
        </>
      )}
    </Row>
  );
};
export default Wallet;
