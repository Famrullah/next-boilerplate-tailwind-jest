/* eslint-disable react/no-array-index-key */
import React from 'react';
import Image from 'next/image';
import { Menus } from '../../utils/constants/menu';
import MenusComponent from './parts/menu';
import useStore from '../../store/useStore';

const Sidebar = () => {
  const isOpen = useStore((state) => state.getData());
  return (
    <div
      className={` ${
        isOpen ? 'w-60' : 'w-20 '
      } bg-red-900 h-screen p-5  pt-8 relative duration-300`}
    >

      <div className="flex gap-x-4 items-center">
        <Image
          src="/vercel.svg"
          alt="my image"
          width={150}
          height={80}
          className={`object-contain cursor-pointer duration-500 ${
            isOpen && 'rotate-[360deg] text-xl text-white'
          }`}
        />
      </div>
      <ul className="pt-6">
        <MenusComponent menu={Menus} open={isOpen} />
      </ul>
    </div>
  );
};

export default Sidebar;
