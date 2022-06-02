import React from 'react';
import Layout from '../layout/Layout';
import AuthForm from './auth/authForm';

const Login = () => {
  return <AuthForm />;
};

Login.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Login;
