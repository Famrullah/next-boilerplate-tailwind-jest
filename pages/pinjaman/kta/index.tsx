import React from 'react';
import KtaContainer from '@/containers/pinjaman/kta';
import { getLayout } from '@/components/layouts/dashboard';

const Kta = () => (
  <div>
    <KtaContainer />
  </div>
);

Kta.getLayout = getLayout;
export default Kta;
