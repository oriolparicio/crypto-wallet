import Layout from '../layout/Layout';
import Wallet from './wallet/Wallet';

export default function Index() {
  return <Wallet />;
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};
