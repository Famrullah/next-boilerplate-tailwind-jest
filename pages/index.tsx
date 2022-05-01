import React from 'react';
import HomeContainer from '../containers/home/homeContainer';
import { fetchPosts } from '../services/HomeApi';

const HomePage = (props:any) => {
  const data = props as any;
  return (
    <HomeContainer {...data} />
  );
};

export async function getServerSideProps() {
  const req = await fetchPosts();
  return {
    props: {
      data: req,
    },
  };
}

export default HomePage;
