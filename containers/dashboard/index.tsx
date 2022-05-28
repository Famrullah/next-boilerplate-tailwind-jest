/* eslint-disable react/no-unstable-nested-components */
import React, { useMemo } from 'react';
import { getLayout } from '../../components/layouts/dashboard';
import BreadCumbs from '../../components/breadcumbs';
import { PieChart } from '../../components/chart';
import Table from '../../components/table';

const Dashboard = ({ isFetching, data }: any) => {
  const options = {
    noRowsPerPage: true,
  };

  const handleAction = (e:any) => {
    console.log(e);
  };

  const columns = useMemo(() => [
    {
      name: 'Name',
      selector: (row) => row.name,
      sortable: true,
      cell: (e:any) => <span className="text-gray-600 capitalize">{e.name}</span>,
    },
    {
      name: 'Gender',
      selector: (row) => row.gender,
      cell: (d) => <span className="text-gray-600 capitalize">{d.gender}</span>,
    },
    {
      name: 'Birth Year',
      selector: (row) => row.birth_year,
      cell: (e:any) => <span className="text-gray-600 capitalize">{e.birth_year}</span>,
    },
    {
      name: 'Action',
      cell: (e) => <button className="bg-green-400 text-white py-1 px-2 rounded" onClick={() => handleAction(e)}>Action</button>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ], []);
  if (isFetching) return (<>loading</>);
  return (
    <div className="flex">
      <div className="w-full">
        <h1 className="font-medium tracking-wide leading-tight text-xl mt-0 mb-2 text-gray-600">Dashboard</h1>
        <BreadCumbs />
        <div className="grid grid-cols-2 gap-6 mt-10">
          <PieChart />
          <div>
            <article className="prose lg:prose-lg sm:prose-sm">
              <h1>Garlic bread with cheese: What the science tells us</h1>
              <p>
                For years parents have espoused the health benefits
                of eating garlic bread with cheese to their
                children, with the food earning such an iconic
                status in our culture that kids will often dress
                up as warm, cheesy loaf for Halloween.
              </p>
              <p>
                But a recent study shows that the celebrated
                appetizer may be linked to a series of rabies cases
                springing up around the country.
              </p>

            </article>
          </div>
        </div>
        <div className="my-24">
          <Table
            data={data.results}
            options={data}
            columns={columns}
            paginationComponentOptions={options}
          />
        </div>
      </div>
    </div>
  );
};
Dashboard.getLayout = getLayout;
export default Dashboard;
