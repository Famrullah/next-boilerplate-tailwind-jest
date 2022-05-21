import React from 'react';
import { fetchPosts } from '../services/HomeApi';
import { getLayout } from '../components/layouts/blog';

const Dashboard = () => (
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

Dashboard.getLayout = getLayout;
export default Dashboard;
