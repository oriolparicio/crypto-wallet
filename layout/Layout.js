import Head from 'next/head';
// Components
import { Container } from 'react-bootstrap';
import Navbar from '../components/navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <Container>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />
      <div>{children}</div>
    </Container>
  );
};

export default Layout;
