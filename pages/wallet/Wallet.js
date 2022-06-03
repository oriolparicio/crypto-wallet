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

const Wallet = () => {
  const { status } = useSelector((state) => state.auth);

  return (
    <Row>
      <Head>
        <title>Degecoin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Graphics />
      <Buttons />
      <Placeholder xs={12} />
      {isStatusFulfilled(status) ? <Placeholder xs={12} /> : <List />}
      <List />
    </Row>
  );
};
export default Wallet;
