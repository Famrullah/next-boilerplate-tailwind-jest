import React from 'react';
import Link from 'next/link';
import { getLayout } from '@/components/layouts/dashboard';
import BreadCumbs from '@/components/breadcumbs';

const Dashboard = () => (
  <div className="flex">
    <div className="w-full">
      <h1 className="font-medium tracking-wide leading-tight text-xl mt-0 mb-2 text-gray-600">Pinjaman</h1>
      <BreadCumbs />
      <div className="grid grid-cols-2 gap-6 mt-10">
        <div>
          <Link href="/pinjaman/kpr">KPR</Link>
        </div>
        <div>
          <Link href="/pinjaman/kta">KTA</Link>
        </div>
      </div>
    </div>
  </div>
);
Dashboard.getLayout = getLayout;
export default Dashboard;
