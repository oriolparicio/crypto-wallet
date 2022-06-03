import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

// Components
import Layout from '../layout/Layout';
import AuthForm from './auth/authForm';

const Login = () => {
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      router.push({
        pathname: '/',
        query: false,
      });
    }
  }, [user, isLoggedIn]);
  return <AuthForm />;
};

Login.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Login;
