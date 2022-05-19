/* eslint-disable react/no-array-index-key */
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { sideNavData } from './parts/utils/sideNavData';
import { isEmpty } from '../../utils/isEmpty';

const SideBar: React.FC = () => {
  const [activePage, setActivePage] = useState<string>('');
  const myRefs = useRef([]);

  const setActiveLink = ({ target }) => {
    if (target.classList.value !== '') {
      target.classList = '';
    } else {
      target.classList = 'bg-green-400 text-white';
    }
  };

  return (
    <aside className="w-64" aria-label="Sidebar">
      <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800 h-screen">
        <a href="https://flowbite.com" className="flex items-center pl-2.5 mb-5">
          <Image src="/vercel.svg" className="h-6 mr-3 sm:h-7" alt="Flowbite Logo" width={100} height={50} />
        </a>
        <ul className="space-y-2">
          {sideNavData.map((item, i:number) => (
            <li key={i} onClick={() => setActivePage(item.text)} aria-hidden="true" className="text-gray-600">
              <Link href={item.link}>
                <p className={`relative flex items-center p-2 text-base font-normal rounded-lg dark:text-white hover:bg-green-400 hover:text-white dark:hover:bg-gray-900 ${activePage === item.text ? 'bg-green-400 text-white' : ''}`} aria-hidden="true">
                  <item.icon className="active:text-white w-6 h-6 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                  <span className="ml-3">{item.text}</span>
                  {(!isEmpty(item.children)) && (<AiOutlineArrowDown className="ml-5 absolute right-1" />)}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        {
          [1, 2, 3].map((v, i) => (
            <button
              id={i.toString()}
              // eslint-disable-next-line no-return-assign
              ref={(el) => (myRefs.current[i] = el)}
              onClick={(val) => setActiveLink(val)}
            >
              {`Button${i}`}
            </button>
          ))
        }
      </div>
    </aside>
  );
};

export default SideBar;
