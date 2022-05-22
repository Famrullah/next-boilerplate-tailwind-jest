import React from 'react';

const DefaultLayout = ({ children }:any) => (
  <div>
    {children}
  </div>
);

export const getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>;

export default DefaultLayout;
