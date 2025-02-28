import { Article } from '@prisma/client';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v5 as uuidv5 } from 'uuid';
import axios from '@/app/api/axios';
import { NAMESPACE } from '@/lib/utils';

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

export const getUsersArticlesData = createAsyncThunk(
  'getArticlesData',
  async (username: string): Promise<any> => {
    const res = await axios.get('/api/articles/user', {
      params: { username: username }
    });
    return res.data.articles;
  }
);

export const getUniqueArticleData = createAsyncThunk(
  'getUniqueArticleData',
  async ({ title, username }: { title: string; username: string }) => {
    const content = await axios
      .get(`/articles/${username}/${title}.md`)
      .then(res => {
        return res.data;
      });
    if (!content) return undefined;

    const articleId = uuidv5(title, NAMESPACE);
    const data = await axios
      .get('/api/articles/user', {
        params: { username: username }
      })
      .then(res => {
        return res.data.articles;
      });

    return {
      metadata: data.filter((article: Article) => article.id === articleId),
      content: content
    };
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
