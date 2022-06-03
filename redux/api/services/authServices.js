import { axiosInstance as axios } from '../../network/_axios';

const login = async (username, password) => {
  return await axios
    .post('/auth/signin', {
      username,
      password,
    })
    .then((response) => {
      let data = response.data;
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(data));
      }
      return data;
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
