import React from 'react';
import { getLayout } from '../../components/layouts/dashboard';
import BreadCumbs from '../../components/breadcumbs';
import { PieChart } from '../../components/chart';

const Dashboard = () => (
  <div className="flex">
    <div className="w-full">
      <h1 className="font-medium tracking-wide leading-tight text-xl mt-0 mb-2 text-gray-600">Dashboard</h1>
      <BreadCumbs />
      <div className="grid grid-cols-2 gap-4 mt-5">
        <div className="shadow-md">
          <PieChart />
        </div>
        <div className="shadow-md">
          <PieChart />
        </div>
        <div className="shadow-md">
          <PieChart />
        </div>
        <div className="shadow-md">
          <PieChart />
        </div>
        <div className="shadow-md">
          <PieChart />
        </div>
        <div className="shadow-md">
          <PieChart />
        </div>
      </div>
    </div>
  </div>
);
Dashboard.getLayout = getLayout;
export default Dashboard;
