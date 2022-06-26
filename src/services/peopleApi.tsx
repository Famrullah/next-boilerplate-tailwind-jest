import { api } from './api';
// import { IPosts } from '../interfaces/postsInterfaces';

export const searchPeople = async (query:string): Promise<any> => {
  const req = await api.get(`/people/?search=${query}`);
  return req.data;
};

export const fetchPeopleSlug = async (query:string | number): Promise<any> => {
  const req = await api.get(`/people/?page=${query}`);
  return req.data;
};
