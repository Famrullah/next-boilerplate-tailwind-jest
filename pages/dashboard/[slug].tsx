import React from 'react';
import { useQuery } from 'react-query';
import { getLayout } from '../../components/layouts/dashboard';
import DashboardContainer from '../../containers/dashboard';
import { fetchPosts } from '../../services/HomeApi';

const Dashboard = (props:any) => {
  const req = useQuery(
    'fetchPosts',
    fetchPosts,
    {
      initialData: props,
      staleTime: 0,
    },
  );

  return (
    <DashboardContainer {...req} />
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
