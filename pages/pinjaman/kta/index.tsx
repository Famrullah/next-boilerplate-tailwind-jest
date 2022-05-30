import React from 'react';
import { getLayout } from '../../../components/layouts/dashboard';
import BreadCumbs from '../../../components/breadcumbs';

const Kta = () => (
  <div>
    <BreadCumbs />
    KTA
  </div>
);

Kta.getLayout = getLayout;
export default Kta;
