import React from 'react';
import { getLayout } from '@/components/layouts/dashboard';
import DashboardContainer from '@/containers/dashboard';

const Dashboard = () => (
  <DashboardContainer />
);

Dashboard.getLayout = getLayout;
export default Dashboard;
