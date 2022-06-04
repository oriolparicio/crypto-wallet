import { axiosInstance as axios } from '../../network/_axios';
import authHeader from '../methods/authHeader';
const get = async (id) => {
  return await axios
    .get(`/transactions/${id}`, {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data;
    });
};
const post = async (body) => {
  return await axios
    .post(`/transactions`, body, {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data;
    });
};

const transactionsServices = {
  get,
  post,
};

export default transactionsServices;
