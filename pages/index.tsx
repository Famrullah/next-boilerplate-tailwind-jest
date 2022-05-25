import React from 'react';
import { fetchPosts } from '../services/HomeApi';
import { getLayout } from '../components/layouts/blog';
import LoginPage from '../components/login';

const LandingPage = (props: any) => {
  console.log(props);
  return (
    <div className="flex">
      <div className="w-full"><LoginPage /></div>
    </div>
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

LandingPage.getLayout = getLayout;
export default LandingPage;
