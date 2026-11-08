import { configureStore } from '@reduxjs/toolkit';
import vacanciesReducer from '../features/vacancies/vacanciesSlice';
import { vacanciesApi } from '../features/vacancies/vacanciesApi';

export const store = configureStore({
  reducer: {
    vacancies: vacanciesReducer,
    [vacanciesApi.reducerPath]: vacanciesApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(vacanciesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;