import { Badge, Button } from '@mantine/core';

import type { Vacancy } from '../../types/vacancy';

import './VacancyCard.scss';

interface VacancyCardProps {
  vacancy: Vacancy;
}

const spaceLabels = {
  remote: 'Можно удалённо',
  office: 'Офис',
  hybrid: 'Гибрид',
};

export const VacancyCard = ({ vacancy }: VacancyCardProps) => {
  return (
    <article className="vacancy-card">
      <h2 className="vacancy-card__title">{vacancy.name}</h2>

      <div className="vacancy-card__info">
        <span className="vacancy-card__salary">
          {Number(vacancy.salary).toLocaleString('ru-RU')} ₽
        </span>

        <span className="vacancy-card__experience">
          Опыт {vacancy.experience}
        </span>
      </div>

      <p className="vacancy-card__company">
        {vacancy.company_name}
      </p>

      <Badge
        className={`vacancy-card__badge vacancy-card__badge--${vacancy.space}`}
        variant="light"
        color={
          vacancy.space === 'remote'
            ? 'blue'
            : vacancy.space === 'hybrid'
              ? 'dark'
              : 'gray'
        }
      >
        {spaceLabels[vacancy.space]}
      </Badge>

      <p className="vacancy-card__city">{vacancy.city}</p>

      <Button
        className="vacancy-card__button"
        color="dark"
        onClick={() => {}}
      >
        Посмотреть вакансию
      </Button>
    </article>
  );
};