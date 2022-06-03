import { axiosInstance as axios } from '../../network/_axios';

const get = async (id) => {
  return await axios.get(`/transactions/${id}`).then((response) => {
    return response.data;
  });
};
const post = async (body) => {
  return await axios.post(`/transactions`, body).then((response) => {
    return response.data;
  });
};

const transactionsServices = {
  get,
  post,
};

export default transactionsServices;
