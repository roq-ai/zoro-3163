import axios from 'axios';
import queryString from 'query-string';
import { AnimeContentInterface, AnimeContentGetQueryInterface } from 'interfaces/anime-content';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getAnimeContents = async (
  query?: AnimeContentGetQueryInterface,
): Promise<PaginatedInterface<AnimeContentInterface>> => {
  const response = await axios.get('/api/anime-contents', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createAnimeContent = async (animeContent: AnimeContentInterface) => {
  const response = await axios.post('/api/anime-contents', animeContent);
  return response.data;
};

export const updateAnimeContentById = async (id: string, animeContent: AnimeContentInterface) => {
  const response = await axios.put(`/api/anime-contents/${id}`, animeContent);
  return response.data;
};

export const getAnimeContentById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/anime-contents/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteAnimeContentById = async (id: string) => {
  const response = await axios.delete(`/api/anime-contents/${id}`);
  return response.data;
};
