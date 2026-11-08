export interface Vacancy {
  id: number;
  company_name: string;
  name: string;
  city: string;
  salary: string;
  published_at: string;
  short_description: string;
  space: 'office' | 'remote' | 'hybrid';
  skills: string;
  experience: string;
}

export interface VacanciesResponse {
  success: boolean;

  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };

  jobs: Vacancy[];
}

export interface VacanciesParams {
  page?: number;
  search?: string;
  city?: string;
  skills?: string[];
}