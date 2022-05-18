import React from 'react';
import SideBar from '../components/sidebar';
import { fetchPosts } from '../services/HomeApi';

const HomePage = (props:any) => {
  const data = props as any;
  return (
    <SideBar {...data} />
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
