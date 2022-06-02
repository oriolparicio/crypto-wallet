import Head from 'next/head';
// Components
import { Row } from 'react-bootstrap';
import Graphics from './components/Graphics';
import Buttons from './components/Buttons';
import List from './components/List';

const Wallet = () => {
  return (
    <Row>
      <Head>
        <title>Degecoin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Graphics />
      <Buttons />
      <List />
    </Row>
  );
};
export default Wallet;
