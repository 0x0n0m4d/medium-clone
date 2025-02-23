import { User } from '@prisma/client';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUsersAction } from '@/actions/user.action';

interface UsersDataProps {
  isLoading: boolean;
  data: User[] | null;
  error: boolean;
}

export const getUsersData = createAsyncThunk(
  'getUsersData',
  async (id: string): Promise<any> => {
    const users = await getUsersAction({ id });
    return users;
  }
);

const initialState: UsersDataProps = {
  isLoading: false,
  data: null,
  error: false
};

const usersData = createSlice({
  name: 'usersData',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getUsersData.pending, state => {
      state = { ...state, isLoading: true, error: false };
    });
    builder.addCase(
      getUsersData.fulfilled,
      (state, action: PayloadAction<User[]>) => {
        state = {
          ...state,
          isLoading: false,
          data: action.payload
        };
      }
    );
    builder.addCase(getUsersData.rejected, state => {
      state = { ...initialState, error: true };
    });
  }
});

export default usersData.reducer;
