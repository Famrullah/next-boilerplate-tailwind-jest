/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import {
  AiOutlineDashboard,
  AiOutlineArrowDown,
} from 'react-icons/ai';
import Link from 'next/link';
import { isEmpty } from '../../utils/isEmpty';
import { Menus } from './parts/utils/sideNavData';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [openLink, setOpenLink] = useState<any>({});
  const [activeLink, setActiveLink] = useState<any>({});
  const [activePage, setActivePage] = useState<string>('Beranda');

  const setShowDropDown = (title: string) => {
    setActivePage(title);
    setOpenLink((prevOpenLink) => ({
      [title]: !prevOpenLink[title],
    }));
    setActiveLink({});
  };

  const setActiveLinks = (id:any) : void => {
    setActiveLink(id);
  };

  return (
    <div
      className={` ${
        open ? 'w-60' : 'w-20 '
      } bg-green-800 h-screen p-5  pt-8 relative duration-300`}
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
        {Menus.map((item, index) => (
          <>
            <Link href={item.link}>
              <li
                aria-hidden
                onClick={() => setShowDropDown(item.title)}
                key={index}
                className={`flex block rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                ${item.gap ? 'mt-9' : 'mt-2'} ${activePage === item.title ? 'bg-light-white' : ''}`}
              >
                <item.icon />
                <span className={`${!open && 'hidden'} origin-left duration-200`}>
                  {item.title}
                </span>
                {(!isEmpty(item.children) && open) && (<AiOutlineArrowDown className="ml-5 absolute right-6" />)}
              </li>
            </Link>
            {(!isEmpty(item.children) && openLink[item.title]) && (item.children.map((link, i) => (
              <div
                key={i}
                aria-hidden
                onClick={() => setActiveLinks(`${link.title}-${index}`)}
                className={`${activeLink === `${link.title}-${index}` ? 'bg-light-white' : ''} ml-2 my-2 flex block rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                `}
              >
                <item.icon />
                <span className={`${!open && 'hidden'} origin-left duration-200`}>
                  {link.title}
                </span>
              </div>
            )))}
          </>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
