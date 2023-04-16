import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
type MovieType = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};
type MovieState = {
  searchMovie: string;
  movies: MovieType[];
  loading: boolean;
  error: string | undefined;
};
export const fetchMovies = createAsyncThunk<MovieType[], string, { rejectValue: string }>(
  'api/fetchMovie',
  async (searchValue, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${searchValue}&page=${1}&apikey=4a3b711b`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch movie');
      }
      const data = await response.json();
      return data.Search;
    } catch (err) {
      return rejectWithValue((err as Error).message);
    }
  }
);
const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    searchMovie: '',
    movies: [],
    loading: false,
    error: undefined,
  } as MovieState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchMovie = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const MovieActions = movieSlice.actions;

export default movieSlice;
