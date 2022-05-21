import React from 'react';
import Sidebar from '../../sidebar';

const AppLayout = ({ children }: any) => (
  <div className="flex">
    <Sidebar />
    <div className="h-screen flex-1">
      <div className="relative">
        <div className="fixed shadow-md w-full p-5 top">navbaar</div>
      </div>
      <div className="p-5 mt-20">{children}</div>
    </div>
  </div>
);
export const getLayout = (page) => <AppLayout>{page}</AppLayout>;
export default AppLayout;
