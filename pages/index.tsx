import React from 'react';
import { fetchPosts } from '../services/HomeApi';

const HomePage = () => (
  <div className="flex">
    <div className="w-full bg-gray-700">ll</div>
  </div>
);

export async function getServerSideProps() {
  const req = await fetchPosts();
  return {
    props: {
      data: req,
    },
  };
}

export default HomePage;
