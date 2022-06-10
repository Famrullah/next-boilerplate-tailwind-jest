import React from 'react';
import DashboardContainer from '@/containers/dashboard';
import { getLayout } from '@/components/layouts/dashboard';

const Dashboard = () => (
  <DashboardContainer />
);

Dashboard.getLayout = getLayout;
export default Dashboard;
