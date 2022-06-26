/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const BreadCumbs: React.FC = () => {
  const router = useRouter();
  const linkPath: any = router.asPath.split('/');
  const removeQueryParams = linkPath[linkPath.length - 1].split('?');
  if (removeQueryParams[1]) {
    // eslint-disable-next-line prefer-destructuring
    linkPath[linkPath.length - 1] = removeQueryParams[0];
  }
  linkPath.shift();
  const pathArray = linkPath.map((path, i) => ({ breadcrumb: path, href: `/${linkPath.slice(0, i + 1).join('/')}` }));
  return (
    <nav className="rounded-md w-full my-5">
      {(pathArray.length > 1) ? (
        <ol className="list-reset flex">
          {pathArray.map((path, i:number) => (
            <ol className="list-reset flex" key={i}>
              <Link href={path.href}>
                <li className="text-gray-600 capitalize mr-1 text-sm hover:text-blue-700">
                  {path.breadcrumb}
                </li>
              </Link>
              {(i !== pathArray.length - 1) ? (
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                </div>
              ) : ''}
            </ol>
          ))}
        </ol>
      ) : null}
    </nav>
  );
};

export default BreadCumbs;
