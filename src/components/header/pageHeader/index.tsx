import React from 'react';
import BreadCumbs from '../../breadcumbs';

interface IProps {
    title: string
}

export const PageHeader:React.FC<IProps> = ({ title }) => (
  <>
    <h1 className="font-medium tracking-wide leading-tight text-xl mt-0 mb-2 text-gray-600">{title}</h1>
    <BreadCumbs />
  </>
);
