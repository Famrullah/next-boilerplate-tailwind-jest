/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import {
  AiOutlineDashboard,
} from 'react-icons/ai';
import { Menus } from './parts/utils/sideNavData';
import MenusComponent from './parts/menu';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div
      className={` ${
        open ? 'w-60' : 'w-20 '
      } bg-teal-500 h-screen p-5  pt-8 relative duration-300`}
    >
      <AiOutlineDashboard
        className={`mt-7 absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && 'rotate-180'}`}
        onClick={() => setOpen(!open)}
      />

      <div className="flex gap-x-4 items-center">
        <AiOutlineDashboard
          className={`cursor-pointer duration-500 ${
            open && 'rotate-[360deg]'
          }`}
        />
        <h1
          className={`text-white origin-left font-medium text-xl duration-200 ${
            !open && 'scale-0'
          }`}
        >
          bleee
        </h1>
      </div>
      <ul className="pt-6">
        <MenusComponent menu={Menus} open={open} />
      </ul>
    </div>
  );
};

export default Sidebar;
