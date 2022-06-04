const checkAuth = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return (user && user.token) !== null;
};

export default checkAuth;
