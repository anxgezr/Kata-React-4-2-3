import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type {
  VacanciesParams,
  VacanciesResponse,
} from '../../types/vacancy';

export const vacanciesApi = createApi({
  reducerPath: 'vacanciesApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://kata-jobs.onrender.com/api/',
  }),

  tagTypes: ['Vacancies'],

  endpoints: (builder) => ({
    getVacancies: builder.query<VacanciesResponse, VacanciesParams>({
      query: ({ page = 1, search, city, skills = [] }) => {
        const params = new URLSearchParams();

        params.set('page', String(page));

        if (search) params.set('search', search);
        if (city) params.set('city', city);
        if (skills.length) params.set('skills', skills.join(','));

        return `jobs?${params.toString()}`;
      },

      providesTags: ['Vacancies'],
    }),
  }),
});

export const { useGetVacanciesQuery } = vacanciesApi;