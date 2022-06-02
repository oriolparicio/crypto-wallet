import Head from 'next/head';
import Navbar from '../components/navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
