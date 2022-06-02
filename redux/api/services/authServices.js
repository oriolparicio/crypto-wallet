import { axiosInstance as axios } from '../../network/_axios';

const login = async (username, password) => {
  return await axios
    .post('/signin', {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem('user');
};

const authServices = {
  login,
  logout,
};

export default authServices;
