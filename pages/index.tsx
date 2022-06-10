import React from 'react';
import { getLayout } from '../src/components/layouts/blog';
import LoginPage from '../src/components/login';

const LandingPage = () => (
  <div className="flex">
    <div className="w-full"><LoginPage /></div>
  </div>
);

LandingPage.getLayout = getLayout;
export default LandingPage;
