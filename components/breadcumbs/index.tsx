import React from 'react';

const BreadCumbs: React.FC = () => (
  <nav className="rounded-md w-full mt-5">
    <ol className="list-reset flex">
      <li className="text-blue-600 text-sm hover:text-blue-700">Home</li>
      <li className="text-gray-500 text-sm mx-2">/</li>
      <li className="text-gray-500 text-sm">Library</li>
    </ol>
  </nav>
);

export default BreadCumbs;
