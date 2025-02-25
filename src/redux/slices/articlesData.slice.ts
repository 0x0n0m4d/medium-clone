import { Article } from '@prisma/client';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from '@/app/api/axios';

interface ArticlesDataProps {
  isLoading: boolean;
  data: Article[] | null;
  error: boolean;
}

export const getArticlesData = createAsyncThunk(
  'getArticlesData',
  async (id: string): Promise<any> => {
    const res = await axios.get('/api/articles', { params: { id } });
    return res.data.articles;
  }
);

const initialState: ArticlesDataProps = {
  isLoading: false,
  data: null,
  error: false
};

const articlesData = createSlice({
  name: 'articlesData',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getArticlesData.pending, state => {
      state = { ...state, isLoading: true, error: false };
    });
    builder.addCase(
      getArticlesData.fulfilled,
      (state, action: PayloadAction<Article[]>) => {
        state = {
          ...state,
          isLoading: false,
          data: action.payload
        };
      }
    );
    builder.addCase(getArticlesData.rejected, state => {
      state = { ...initialState, error: true };
    });
  }
});

export default articlesData.reducer;
