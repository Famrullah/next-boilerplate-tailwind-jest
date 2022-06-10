import React from 'react';
import KprContainer from '../../../src/containers/pinjaman/kpr';
import { getLayout } from '../../../src/components/layouts/dashboard';

const Kpr = () => (
  <div>
    <KprContainer />
  </div>
);

Kpr.getLayout = getLayout;
export default Kpr;
