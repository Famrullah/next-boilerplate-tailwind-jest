import axios from './api';

export const fetchSurat = async () => {
  const req = await axios.get('/surat');
  const res = await req.data;
  return res;
};
