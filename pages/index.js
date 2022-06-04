import { useEffect } from 'react';
import { useRouter } from 'next/router';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { getTransactions } from '../redux/api/slices/transactionSlice';
import checkAuth from '../redux/api/methods/checkAuth';

// Components
import Layout from '../layout/Layout';
import Wallet from './wallet/Wallet';

// Utils
import isStatusFulfilled from '../utils/isStatusFulfilled';

const Index = () => {
  const dispatch = useDispatch();

  const router = useRouter();

  const { user, isLoggedIn } = useSelector((state) => state.auth);
  const { status } = useSelector((state) => state.transactions);

  useEffect(() => {
    if (!user && !checkAuth()) {
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
    let userId =
      user?.data?._id || JSON.parse(localStorage.getItem('user'))?.data?._id;
    if (isLoggedIn && !isStatusFulfilled(status)) initFetch(userId);
  }, [status]);

  return user && isStatusFulfilled(status) ? <Wallet /> : <></>;
};

Index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Index;
