import React from 'react';
import KprContainer from '../../../containers/pinjaman/kpr';
import { getLayout } from '../../../components/layouts/dashboard';

const Kpr = () => (
  <div>
    <KprContainer />
  </div>
);

Kpr.getLayout = getLayout;
export default Kpr;
