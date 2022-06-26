import React from 'react';
import { getLayout } from '@/components/layouts/dashboard';
import axios from 'axios';

// eslint-disable-next-line consistent-return
const fetchPeopleSlug = async (url: string) => {
  try {
    const req = await axios.get(url);
    const res = await req.data;
    return res;
  } catch (err) {
    console.log(err);
  }
};

const People = (query: any) => {
  const { data } = query;
  const { name } = data.people;
  return (
    <div className="">
      {name}
    </div>
  );
};

export async function getServerSideProps(ctx) {
  const { url } = ctx.query;
  const people = await fetchPeopleSlug(url);
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
