import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import transactionReducer from './slices/transactionSlice';
import messageReducer from './slices/messageSlice';

const reducer = {
  auth: authReducer,
  transaction: transactionReducer,
  message: messageReducer,
};
export const store = configureStore({
  reducer: reducer,
  devTools: true,
});
