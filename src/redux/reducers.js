import { createSlice } from '@reduxjs/toolkit';
import getNewsApi from "../api/getNewsApi";


export const newsSlice = createSlice({
  name: 'counter',
  initialState: {
    news: [],
  },
  reducers: {
    getNews: (state, action) => {
      state.news = action.payload && action.payload.articles ? action.payload.articles : [];
    },
  },
});

export const { getNews } = newsSlice.actions;

export const newsItems = state => state.counter;

export default newsSlice.reducer;