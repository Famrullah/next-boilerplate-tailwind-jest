import { api } from './api';
import { IPosts } from '../interfaces/postsInterfaces';

export const fetchPeople = async (): Promise<IPosts> => {
  const req = await api.get('/people');

  return req.data;
};

export const fetchPeopleSlug = async (query:string | number): Promise<any> => {
  const req = await api.get(`/people/?page=${query}`);
  return req.data;
};
