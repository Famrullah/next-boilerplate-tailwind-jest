import React from 'react';
import { getLayout } from '../../components/layouts/dashboard';
// getLayout = getLayout;

const Dashboard = () => (
  <div className="flex">
    <div className="w-full">home page</div>
  </div>
);
Dashboard.getLayout = getLayout;
export default Dashboard;
