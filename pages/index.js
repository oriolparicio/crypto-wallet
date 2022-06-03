import { useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import Wallet from './wallet/Wallet';

import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactions } from '../redux/api/slices/transactionSlice';

const Index = () => {
  const dispatch = useDispatch();

  const router = useRouter();

  const { user, isLoggedIn } = useSelector((state) => state.auth);
  const { list } = useSelector((state) => state.transaction);

  useEffect(() => {
    if (!user) {
      router.push({
        pathname: '/login',
        query: false,
      });
    }
  }, [isLoggedIn, user]);

  const initFetch = async (id) => {
    await dispatch(getTransactions(id))
      .unwrap()
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    if (isLoggedIn) initFetch(user?.data?._id);
  }, [list]);

  return user ? <Wallet /> : <></>;
};

Index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Index;
