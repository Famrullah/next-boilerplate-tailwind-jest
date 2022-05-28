import React from 'react';

import { getLayout } from '../../components/layouts/dashboard';
import DashboardContainer from '../../containers/dashboard';
import { fetchPosts } from '../../services/HomeApi';

const Dashboard = (props) => {
  console.log(props);
  return (
    <DashboardContainer />
  );
};

export const getServerSideProps = async () => {
  const data = await fetchPosts();
  return {
    props: {
      query: data,
    },
  };
};

Dashboard.getLayout = getLayout;
export default Dashboard;
