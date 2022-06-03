import { HTTP_STATUS } from './constants';

const isStatusFulfilled = (status) => {
  return status === HTTP_STATUS.FULFILLED;
};

export default isStatusFulfilled;
