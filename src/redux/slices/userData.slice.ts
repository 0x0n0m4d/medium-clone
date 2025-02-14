import { User } from '@prisma/client';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from '@/app/api/axios';

interface LoggedUser {
  ip: string | null;
  userAgent: string | null;
  jwt: string | null;
  userData: User | null;
}

type LoggedUserType = LoggedUser | null;

interface UserDataProps {
  isLoading: boolean;
  data: LoggedUserType;
  error: boolean;
}

interface Props {
  email: string;
  name: string;
}

export const getUserData = createAsyncThunk(
  'getUserData',
  async (token: string): Promise<any> => {
    const res = await axios.post('/api/auth/login', {
      token
    });

    return res.data;
  }
);

export const createUserSession = createAsyncThunk(
  'saveUserData',
  async ({ email, name }: Props): Promise<any> => {
    const res = await axios.post('/api/auth/signup', {
      email: email,
      name: name
    });

    return res.data;
  }
);

export const getUserSessionData = createAsyncThunk(
  'getUserData',
  async (jwt: string): Promise<any> => {
    const res = await axios.get('/api/redis', {
      headers: { Authorization: `${jwt}` }
    });

    return res.data;
  }
);

export const removeUserSessionData = createAsyncThunk(
  'removeUserData',
  async (jwt: string): Promise<any> => {
    const res = await axios.post('/api/auth/logout', {
      jwt: jwt
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
    builder.addCase(
      createUserSession.pending || getUserSessionData.pending,
      state => {
        state = { ...state, isLoading: true, error: false };
      }
    );
    builder.addCase(
      createUserSession.fulfilled || getUserSessionData.fulfilled,
      (state, action: PayloadAction<LoggedUserType>) => {
        state = {
          ...state,
          isLoading: false,
          data: action.payload
        };
      }
    );
    builder.addCase(
      createUserSession.rejected || getUserSessionData.rejected,
      state => {
        state = { ...initialState, error: true };
      }
    );
  }
});

export default userData.reducer;
