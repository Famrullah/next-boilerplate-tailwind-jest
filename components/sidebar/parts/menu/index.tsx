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
  const [activePage, setActivePage] = useState<string>('dashboard');

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
              className={`flex block rounded-md p-2 cursor-pointer hover:bg-neutral-400 hover:text-white text-sm items-center gap-x-4 
                ${item.gap ? 'mt-9' : 'mt-2'} ${activePage === item.title ? 'bg-neutral-400 text-white' : ''}`}
            >
              <item.icon className={`${!open && 'text-2xl'} text-lg  origin-left duration-200 capitalize font-thin`} />
              <span className={`${!open && 'hidden'} origin-left duration-200 capitalize font-thin`}>
                {item.title}
              </span>
              {(!isEmpty(item.children) && open) && (<AiOutlineArrowDown className="ml-5 absolute right-6" />)}
            </li>
          </Link>
          {(!isEmpty(item.children) && openLink[item.title]) && (item.children.map((link, i) => (
            <Link href={link.link}>
              <li
                key={i}
                aria-hidden
                onClick={() => setActiveLinks(`${link.title}-${index}`)}
                className={`${activeLink === `${link.title}-${index}` ? 'bg-neutral-400 text-white' : ''}  ml-3 my-2 flex block rounded-md p-2 cursor-pointer hover:bg-neutral-400 hover:text-white text-sm items-center gap-x-4 
                `}
              >
                <item.icon className="text-lg" />
                <span className={`${!open && 'hidden'} origin-left duration-200 capitalize font-thin`}>
                  {link.title}
                </span>
              </li>
            </Link>
          )))}
        </div>
      ))}
    </div>
  );
};

export default Menus;
