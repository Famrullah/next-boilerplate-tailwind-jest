import React from 'react';
import BreadCumbs from '../../../components/breadcumbs';
import { getLayout } from '../../../components/layouts/dashboard';

const Kpr = () => (
  <div>
    <BreadCumbs />
    KPR
  </div>
);

Kpr.getLayout = getLayout;
export default Kpr;
