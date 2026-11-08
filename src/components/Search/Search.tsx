import { useState } from 'react';
import { TextInput, Button } from '@mantine/core';
import { Search as SearchIcon } from 'lucide-react';

import { useAppDispatch } from '../../hooks';
import { setSearch } from '../../features/vacancies/vacanciesSlice';

import './Search.scss';

export const Search = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('');

  const handleSearch = () => {
    dispatch(setSearch(value.trim()));
  };

  return (
    <div className="search">
      <TextInput
        className="search__input"
        placeholder="Должность или название компании"
        leftSection={<SearchIcon size={16} />}
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') handleSearch();
        }}
      />

      <Button className="search__button" onClick={handleSearch}>
        Найти
      </Button>
    </div>
  );
};