import React from 'react';
import { fetchPosts } from '../services/HomeApi';
import { getLayout } from '../components/layouts/blog';

const LandingPage = () => (
  <div className="flex">
    <div className="w-full">ljdkjjfl</div>
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

LandingPage.getLayout = getLayout;
export default LandingPage;
