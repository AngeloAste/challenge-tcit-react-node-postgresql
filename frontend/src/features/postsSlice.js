import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Configuración de URL de API para diferentes entornos
// Desarrollo: http://localhost:3000/api/posts
// Producción: Configurar VITE_API_URL en variables de entorno de Railway
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/posts';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const createPost = createAsyncThunk('posts/createPost', async (postData) => {
  const response = await axios.post(API_URL, postData);
  return response.data;
});

export const deletePost = createAsyncThunk('posts/deletePost', async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    items: [],
    filteredItems: [],
    filterText: '',
    status: 'idle',
    error: null
  },
  reducers: {
    setFilterText: (state, action) => {
      state.filterText = action.payload;
      if (action.payload === '') {
        state.filteredItems = state.items;
      } else {
        state.filteredItems = state.items.filter(post =>
          post.name.toLowerCase().includes(action.payload.toLowerCase())
        );
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'cargando';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'exitoso';
        state.items = action.payload;
        state.filteredItems = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'fallido';
        state.error = action.error.message;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
        state.filteredItems = state.filterText
          ? state.items.filter(post =>
              post.name.toLowerCase().includes(state.filterText.toLowerCase())
            )
          : state.items;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.items = state.items.filter(post => post.id !== action.payload.id);
        state.filteredItems = state.filterText
          ? state.items.filter(post =>
              post.name.toLowerCase().includes(state.filterText.toLowerCase())
            )
          : state.items;
      });
  }
});

export const { setFilterText } = postsSlice.actions;
export default postsSlice.reducer;
