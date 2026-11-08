import { useEffect } from 'react';
import { Alert, Loader, Pagination } from '@mantine/core';

import { useAppDispatch, useAppSelector } from '../../hooks';

import { useGetVacanciesQuery } from '../../features/vacancies/vacanciesApi';
import { setPage } from '../../features/vacancies/vacanciesSlice';

import { Search } from '../../components/Search/Search';
import { Skills } from '../../components/Skills/Skills';
import { CitySelect } from '../../components/CitySelect/CitySelect';
import { VacancyCard } from '../../components/VacancyCard/VacancyCard';

import './VacanciesPage.scss';

export const VacanciesPage = () => {
  const dispatch = useAppDispatch();

  const { search, city, skills, page } = useAppSelector(
    (state) => state.vacancies,
  );

  const {
    data,
    isLoading,
    isFetching,
    isError,
  } = useGetVacanciesQuery({
    page,
    search,
    city,
    skills,
  });

  const totalPages = data?.pagination.totalPages ?? 1;

  useEffect(() => {
    if (data && page > data.pagination.totalPages) {
      dispatch(setPage(data.pagination.totalPages || 1));
    }
  }, [data, page, dispatch]);

  return (
    <main className="vacancies-page">
      <div className="vacancies-page__top">
        <div className="vacancies-page__heading">
          <h1>Список вакансий</h1>
          <p>по профессии Frontend-разработчик</p>
        </div>

        <Search />
      </div>

      <div className="vacancies-page__content">
        <aside className="vacancies-page__sidebar">
          <Skills />
          <CitySelect />
        </aside>

        <section className="vacancies-page__results">
          {isLoading && (
            <div className="vacancies-page__loader">
              <Loader color="indigo" />
            </div>
          )}

          {isError && (
            <Alert color="red" title="Ошибка загрузки">
              Не удалось загрузить вакансии. Попробуй обновить страницу.
            </Alert>
          )}

          {!isLoading && !isError && data?.jobs.length === 0 && (
            <div className="vacancies-page__empty">
              Вакансии не найдены
            </div>
          )}

          {!isLoading && !isError && (
            <>
              <div className={isFetching ? 'vacancies-page__list is-fetching' : 'vacancies-page__list'}>
                {data?.jobs.map((vacancy) => (
                  <VacancyCard
                    key={vacancy.id}
                    vacancy={vacancy}
                  />
                ))}
              </div>

              {data && totalPages > 1 && (
                <Pagination
                  className="vacancies-page__pagination"
                  total={totalPages}
                  value={page}
                  onChange={(value) => dispatch(setPage(value))}
                  siblings={1}
                  boundaries={1}
                />
              )}
            </>
          )}
        </section>
      </div>
    </main>
  );
};