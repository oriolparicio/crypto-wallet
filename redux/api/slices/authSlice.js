import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// Services
import AuthService from '../services/authServices';
// Slices
import { setMessage } from './messageSlice';
// Constants
import { HTTP_STATUS } from '../../../utils/constants';

let user;
if (typeof localStorage !== 'undefined') {
  user = JSON.parse(localStorage.getItem('user'));
} else {
  user = null;
}

const initialState = user
  ? { status: HTTP_STATUS.IDLE, isLoggedIn: true, user }
  : { status: HTTP_STATUS.IDLE, isLoggedIn: false, user: null };

export const login = createAsyncThunk(
  'auth/login',
  async ({ username, password }, thunkAPI) => {
    try {
      const data = await AuthService.login(username, password);
      return { user: data };
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

export const logout = createAsyncThunk('auth/logout', async () => {
  await AuthService.logout();
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: {
    // Login
    [login.fulfilled](state, { payload }) {
      state.status = HTTP_STATUS.FULFILLED;
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [login.rejected](state, { error }) {
      state.status = HTTP_STATUS.REJECTED;
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

const { reducer } = authSlice;
export default reducer;
