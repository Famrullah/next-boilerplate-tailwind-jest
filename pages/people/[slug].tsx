import React from 'react';
import { getLayout } from '@/components/layouts/dashboard';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

// eslint-disable-next-line consistent-return
const fetchData = async (url: string) => {
  try {
    const req = await axios.get(url);
    const res = await req.data;
    return res;
  } catch (err) {
    console.log(err);
  }
};

const getAllData = async (films : any) => {
  return Promise.all(films.map(async (url) => {
    const {data} = await axios.get(url);
    return data;
  }));
};

const People = (query: any) => {
  const router = useRouter();
  const queryData = query.data;
  const { name, films } = queryData.people;
  const { data, isLoading } = useQuery('users', () => getAllData(films));
  if(isLoading) return 'loading'
  console.log(data)
  return (
    <div className="">
      <div className="flex">
        <button onClick={() => router.back()} type="button" className="text-black bg-stone-200 px-2.5 mb-5 font-medium rounded-lg text-sm py-2.5 text-center inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      {name}
    </div>
  );
};

export async function getServerSideProps(ctx) {
  const { url } = ctx.query;
  const people = await fetchData(url);
  return {
    props: {
      data: {
        people,
      },
    },
  };
}

People.getLayout = getLayout;
export default People;
