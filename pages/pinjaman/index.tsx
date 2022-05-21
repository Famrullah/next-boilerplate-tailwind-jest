import React from 'react';
import { getLayout } from '../../components/layouts/dashboard';
import BreadCumbs from '../../components/breadcumbs';

const Dashboard = () => (
  <div className="flex">
    <div className="w-full">
      <h1 className="font-medium tracking-wide leading-tight text-xl mt-0 mb-2 text-gray-600">Pinjaman</h1>
      <BreadCumbs />
    </div>
  </div>
);
Dashboard.getLayout = getLayout;
export default Dashboard;
