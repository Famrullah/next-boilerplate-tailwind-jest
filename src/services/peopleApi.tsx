import { toast } from 'react-toastify';
import { api } from './api';
// import { IPosts } from '../interfaces/postsInterfaces';

export const searchPeople = async (query:string): Promise<any> => {
  const req = await api.get(`/people/?search=${query}`);
  return req.data;
};

// eslint-disable-next-line consistent-return
export const fetchPeopleSlug = async (query:string | number): Promise<any> => {
  try {
    const req = await api.get(`/peoples/?page=${query}`);
    return req.data;
  } catch (err) {
    toast.error(err.message, {
      position: 'bottom-right',
      theme: 'colored',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};
