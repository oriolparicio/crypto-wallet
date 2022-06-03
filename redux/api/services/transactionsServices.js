import { axiosInstance as axios } from '../../network/_axios';

const get = async (id) => {
  return await axios.get(`/transactions/${id}`).then((response) => {
    return response.data;
  });
};

const transactionsServices = {
  get,
};

export default transactionsServices;
