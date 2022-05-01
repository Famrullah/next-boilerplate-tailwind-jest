import axios from './api';
import { IPosts } from '../interfaces/postsInterfaces';

export const fetchPosts = async (): Promise<IPosts[]> => {
  const req = await axios.get('/posts');
  const res = await req.data;
  return res;
};
