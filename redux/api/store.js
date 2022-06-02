import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import messageReducer from './slices/messageSlice';

const reducer = {
  auth: authReducer,
  message: messageReducer,
};
export const store = configureStore({
  reducer: reducer,
  devTools: true,
});
