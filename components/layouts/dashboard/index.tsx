import React from 'react';
import Sidebar from '../../sidebar';

const Layout = ({ children }: any) => (
  <div className="flex">
    <Sidebar />
    <div className="h-screen flex-1">
      <div className="relative">
        <div className="fixed shadow-md w-full p-5">navbaar</div>
      </div>
      <div className="p-5 mt-20">{children}</div>
    </div>
  </div>
);

export default Layout;
