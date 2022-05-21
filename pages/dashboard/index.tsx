import React from 'react';
import { getLayout } from '../../components/layouts/dashboard';
// getLayout = getLayout;

const HomePage = () => (
  <div className="flex">
    <div className="w-full">home page</div>
  </div>
);
HomePage.getLayout = getLayout;
export default HomePage;
