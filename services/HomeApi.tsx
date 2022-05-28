import { api } from './api';
import { IPosts } from '../interfaces/postsInterfaces';

export const fetchPosts = async (): Promise<IPosts> => {
  const req = await api.get('/people');

  return req.data;
};
