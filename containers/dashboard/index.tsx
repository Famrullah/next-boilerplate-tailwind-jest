/* eslint-disable react/no-unstable-nested-components */
import React, { useMemo, useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { BarLoader } from 'react-spinners';
import { getLayout } from '../../components/layouts/dashboard';
import BreadCumbs from '../../components/breadcumbs';
import { PieChart } from '../../components/chart';
import Table from '../../components/table';
import { fetchPeopleSlug } from '../../services/peopleApi';

const Dashboard = () => {
  const { data, isLoading } = useQuery('users', () => fetchPeopleSlug(1));
  const [peopleData, setPeopleData] = useState<any>([]);
  const [totalRow, setTotalRow] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  const options = {
    noRowsPerPage: true,
  };

  useEffect(() => {
    if (data) {
      setPeopleData(data.results);
      // setPeopleData((prevData) => ({ ...prevData, ...data.results }));
      setTotalRow(data.count);
      setLoading(isLoading);
    }
  }, [data]);

  const handleAction = (e:any) => {
    console.log(e);
  };

  const handlePageChange = async (page) => {
    try {
      setLoading(true);
      const req = await fetchPeopleSlug(page);
      setPeopleData(req.results);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
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
      cell: (e) => <button className="bg-green-400 text-white py-1 px-2 rounded" onClick={() => handleAction(e)}>Details</button>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ], []);

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
            data={peopleData}
            paginationTotalRows={totalRow}
            columns={columns}
            onChangePage={handlePageChange}
            paginationComponentOptions={options}
            fixedHeader
            persistTableHead
            progressPending={loading}
            progressComponent={<BarLoader width="100%" color="#71c4bc" />}
          />
        </div>
      </div>
    </div>
  );
};
Dashboard.getLayout = getLayout;
export default Dashboard;
