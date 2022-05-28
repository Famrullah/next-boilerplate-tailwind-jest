import React from 'react';
import { getLayout } from '../../components/layouts/dashboard';
import BreadCumbs from '../../components/breadcumbs';
import { PieChart } from '../../components/chart';
import Table from '../../components/table';

const data :any = [
  {
    id: 1,
    title: 'Beetlejuice',
    year: '1988',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 3,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 4,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 5,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 6,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 7,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 8,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 9,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 10,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 11,
    title: 'Ghostbusters',
    year: '1984',
  },
];

const columns: any = [
  {
    name: 'Id',
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: 'Title',
    selector: (row) => row.title,
  },
  {
    name: 'Year',
    selector: (row) => row.year,
  },
];

const Dashboard = () => (
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
      <div className="my-24 shadow-md">
        <Table
          data={data}
          columns={columns}
        />
      </div>
    </div>
  </div>
);
Dashboard.getLayout = getLayout;
export default Dashboard;
