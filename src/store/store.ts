import { configureStore } from '@reduxjs/toolkit';
import movieSlice from './reducers/apiReducer';
import formSlice from './reducers/searchReducer';

const store = configureStore({
  reducer: {
    search: movieSlice.reducer,
    form: formSlice.reducer,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
