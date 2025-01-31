import { User } from '@prisma/client';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from '@/app/api/axios';

interface Props {
  email: string;
  name: string;
}

interface UserDataProps {
  isLoading: boolean;
  data: User | null;
  error: boolean;
}

export const saveUserData = createAsyncThunk(
  'saveUserData',
  async ({ email, name }: Props): Promise<any> => {
    const res = await axios.post('/api/auth/signup', {
      email: email,
      name: name
    });

    return res.data;
  }
);

const initialState: UserDataProps = {
  isLoading: false,
  data: null,
  error: false
};

const userData = createSlice({
  name: 'userData',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(saveUserData.pending, state => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(
      saveUserData.fulfilled,
      (state, action: PayloadAction<User>) => {
        state.isLoading = false;
        state.data = action.payload;
      }
    );
    builder.addCase(saveUserData.rejected, state => {
      state.error = true;
    });
  }
});

export default userData.reducer;
