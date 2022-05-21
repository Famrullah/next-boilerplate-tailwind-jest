/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  AiOutlineDashboard,
} from 'react-icons/ai';
import { Menus } from '../../utils/constants/menu';
import MenusComponent from './parts/menu';
import useStore from '../../store/useStore';

const Sidebar = () => {
  const isOpen = useStore((state) => state.getData());
  return (
    <div
      className={` ${
        isOpen ? 'w-60' : 'w-20 '
      } bg-teal-500 h-screen p-5  pt-8 relative duration-300`}
    >

      <div className="flex gap-x-4 items-center">
        <AiOutlineDashboard
          className={`cursor-pointer duration-500 ${
            isOpen && 'rotate-[360deg]'
          }`}
        />
        <h1
          className={`text-white origin-left font-medium text-xl duration-200 ${
            !isOpen && 'scale-0'
          }`}
        >
          Bleee
        </h1>
      </div>
      <ul className="pt-6">
        <MenusComponent menu={Menus} open={isOpen} />
      </ul>
    </div>
  );
};

export default Sidebar;
