import { Select } from '@mantine/core';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCity } from '../../features/vacancies/vacanciesSlice';

import './CitySelect.scss';

export const CitySelect = () => {
  const dispatch = useAppDispatch();

  const city = useAppSelector((state) => state.vacancies.city);

  return (
    <div className="city-select">
      <Select
        placeholder="Все города"
        value={city}
        onChange={(value) => dispatch(setCity(value || ''))}
        data={[
          { value: '', label: 'Все города' },
          { value: 'Москва', label: 'Москва' },
          { value: 'Санкт-Петербург', label: 'Санкт-Петербург' },
        ]}
        clearable={false}
        allowDeselect={false}
      />
    </div>
  );
};