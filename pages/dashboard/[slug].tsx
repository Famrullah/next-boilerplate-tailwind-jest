import React from 'react';
import { useQuery } from 'react-query';
import { getLayout } from '../../components/layouts/dashboard';
import DashboardContainer from '../../containers/dashboard';
import { fetchPeople } from '../../services/peopleApi';

const Dashboard = (props:any) => {
  const req = useQuery(
    'fetchPeople',
    fetchPeople,
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
  const data = await fetchPeople();
  return {
    props: {
      query: data,
    },
  };
};

Dashboard.getLayout = getLayout;
export default Dashboard;
