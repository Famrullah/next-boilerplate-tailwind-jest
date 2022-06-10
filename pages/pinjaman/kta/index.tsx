import React from 'react';
import KtaContainer from '../../../src/containers/pinjaman/kta';
import { getLayout } from '../../../src/components/layouts/dashboard';

const Kta = () => (
  <div>
    <KtaContainer />
  </div>
);

Kta.getLayout = getLayout;
export default Kta;
