import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { SendMailProps } from '@/interfaces/user.interface';
import { GetTempUserDataType } from '@/types/redis.type';

interface TempDataProps {
  isLoading: boolean;
  data: GetTempUserDataType;
  error: boolean;
}

export const saveTempData = createAsyncThunk(
  'saveTempData',
  async ({ email, isLogin }: SendMailProps): Promise<any> => {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/email`, {
      email: email,
      operation: isLogin ? 'login' : 'register'
    });

    return res.data;
  }
);

export const fetchTempData = createAsyncThunk(
  'fetchTempData',
  async (token: string): Promise<any> => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/email`, {
      params: { token: token }
    });
    return res.data;
  }
);

const initialState: TempDataProps = {
  isLoading: false,
  data: null,
  error: false
};

const tempData = createSlice({
  name: 'tempData',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchTempData.pending || saveTempData.pending, state => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(
      fetchTempData.fulfilled || saveTempData.fulfilled,
      (state, action: PayloadAction<GetTempUserDataType>) => {
        state.isLoading = false;
        state.data = action.payload;
      }
    );
    builder.addCase(fetchTempData.rejected || saveTempData.rejected, state => {
      state.error = true;
    });
  }
});

export default tempData.reducer;
