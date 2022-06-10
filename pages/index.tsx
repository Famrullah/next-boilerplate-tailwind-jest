import React from 'react';
import { getLayout } from '@/components/layouts/blog';
import LoginPage from '@/components/login';

const LandingPage = () => (
  <div className="flex">
    <div className="w-full"><LoginPage /></div>
  </div>
);

LandingPage.getLayout = getLayout;
export default LandingPage;
