import Head from 'next/head';
// Components
import { Container } from 'react-bootstrap';

// Styles
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <Container className={styles.layoutContainer} nogutters="true">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div>{children}</div>
    </Container>
  );
};

export default Layout;
