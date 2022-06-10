import React from 'react';
import { getLayout } from '../../src/components/layouts/dashboard';
import DashboardContainer from '../../src/containers/dashboard';

const Dashboard = () => (
  <DashboardContainer />
);

Dashboard.getLayout = getLayout;
export default Dashboard;
