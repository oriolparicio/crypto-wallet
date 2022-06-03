import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// Services
// Slices
import { setMessage } from './messageSlice';
// Constants
import { HTTP_STATUS } from '../../../utils/constants';
import TransactionsServices from '../services/transactionsServices';

const initialState = { status: HTTP_STATUS.IDLE, list: [] };

export const getTransactions = createAsyncThunk(
  'transactions/get',
  async (id, thunkAPI) => {
    try {
      const data = await TransactionsServices.get(id);
      return { list: data };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,

  extraReducers: {
    // Get
    [getTransactions.fulfilled](state, { payload }) {
      state.status = HTTP_STATUS.FULFILLED;
      state.list = payload.list;
    },
    [getTransactions.rejected](state, { error }) {
      state.status = HTTP_STATUS.REJECTED;
      state.list = null;
    },
  },
});

const { reducer } = transactionsSlice;
export default reducer;
