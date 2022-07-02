import React from 'react';
import { getLayout } from '@/components/layouts/dashboard';
import axios from 'axios';
import { useQuery } from 'react-query';
import PeopleContainer from '@/containers/people';

const styles = {
  height:'100vh'
}

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
  const queryData = query.data;
  const { name, films } = queryData.people;
  const { data, isLoading } = useQuery('users', () => getAllData(films));
  const props = {
    name,
    data,
    isLoading
  }

  return (
    <PeopleContainer data={props}/>
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
