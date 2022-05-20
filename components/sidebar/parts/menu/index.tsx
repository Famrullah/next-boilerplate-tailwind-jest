/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { isEmpty } from '../../../../utils/isEmpty';

interface IProps {
  menu:any,
  open: boolean
}

const Menus: React.FC<IProps> = ({ menu, open }) => {
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
    <div>
      {menu.map((item, index) => (
        <div key={index}>
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
        </div>
      ))}
    </div>
  );
};

export default Menus;
