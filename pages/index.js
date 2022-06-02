import { useEffect } from 'react';
import Layout from '../layout/Layout';
import Wallet from './wallet/Wallet';

import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const Index = () => {
  const router = useRouter();

  const { user: currentUser } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!currentUser) {
      router.push({
        pathname: '/login',
        query: false,
      });
    }
  }, []);

  return currentUser ? <Wallet /> : <></>;
};

Index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Index;
