import React from 'react';

interface IProps {
    activePage: boolean,
    link:string,
    title: string,
    setActivePage: () => any
}

const SideNav: React.FC<IProps> = ({
  activePage, link, title, setActivePage,
}) => (
  <a onClick={() => setActivePage()} href={link} className={`text-green-50 hover:text-green-100 p-3 rounded-md ${activePage ? 'bg-green-700' : ''}`}>
    <div className="font-bold pl-3">{title}</div>
  </a>
);

export default SideNav;
