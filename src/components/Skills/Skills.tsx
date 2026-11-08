import { useState } from 'react';
import { Button, Pill, TextInput } from '@mantine/core';
import { Plus } from 'lucide-react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  addSkill,
  removeSkill,
} from '../../features/vacancies/vacanciesSlice';

import './Skills.scss';

export const Skills = () => {
  const dispatch = useAppDispatch();

  const skills = useAppSelector((state) => state.vacancies.skills);

  const [value, setValue] = useState('');

  const handleAdd = () => {
    if (!value.trim()) return;

    dispatch(addSkill(value));
    setValue('');
  };

  return (
    <section className="skills">
      <h3 className="skills__title">Ключевые навыки</h3>

      <div className="skills__input-row">
        <TextInput
          className="skills__input"
          placeholder="Навык"
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              event.preventDefault();
              handleAdd();
            }
          }}
        />

        <Button
          className="skills__add"
          onClick={handleAdd}
          aria-label="Добавить навык"
        >
          <Plus size={18} />
        </Button>
      </div>

      <Pill.Group className="skills__list">
        {skills.map((skill) => (
          <Pill
            key={skill}
            withRemoveButton
            onRemove={() => dispatch(removeSkill(skill))}
            className="skills__pill"
          >
            {skill}
          </Pill>
        ))}
      </Pill.Group>
    </section>
  );
};