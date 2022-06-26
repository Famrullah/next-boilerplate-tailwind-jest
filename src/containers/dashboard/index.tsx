/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unstable-nested-components */
import React, { useMemo, useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchPeopleSlug, searchPeople } from '@/services/peopleApi';
import BreadCumbs from '@/components/breadcumbs';
import { PieChart } from '@/components/chart';
import Table from '@/components/table';
import { useForm, useWatch } from 'react-hook-form';
import Input from '@/components/text_input';
import { useRouter } from 'next/router';

type FormValues = {
  FirstName: string;
};

const Dashboard = () => {
  const router = useRouter();
  const { data, isLoading } = useQuery('users', () => fetchPeopleSlug(1));
  const [peopleData, setPeopleData] = useState<any>([]);
  const [totalRow, setTotalRow] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const options = {
    noRowsPerPage: true,
  };
  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      FirstName: '',
    },
    // mode: 'onChange',
  });

  const onSubmit = async (value: FormValues) => {
    try {
      const req = await searchPeople(value.FirstName);
      setPeopleData(req.results);
    } catch (err) {
      console.log(err);
    }
  };

  const getFirstName = useWatch({
    control,
    name: 'FirstName',
  });

  useEffect(() => {
    if (data) {
      setPeopleData(data.results);
      setTotalRow(data.count);
      setLoading(isLoading);
    }
  }, [data]);

  useEffect(() => {
    if (getFirstName === '' && data) setPeopleData(data.results);
  }, [getFirstName]);

  const handleAction = (e:any) => {
    const name = e.name.replace(/\s/g, '').toLowerCase();
    router.push({
      pathname: `/people/${name}`,
      query: {
        url: e.url,
      },
    });
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
      <ToastContainer />
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
          <div className="flex justify-end">
            <form onSubmit={handleSubmit(onSubmit)} className="flex items-center">
              <Input
                control={control}
                name="FirstName"
                rules={{ required: false }}
              />
              <button
                type="submit"
                className="p-2.5 ml-2 text-sm font-medium
                  text-white bg-blue-400 rounded-lg border border-blue-400 hover:bg-blue-500
                  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-400
                  dark:focus:ring-blue-800"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
            </form>
          </div>
          <Table
            data={peopleData}
            paginationTotalRows={totalRow}
            columns={columns}
            onChangePage={handlePageChange}
            paginationComponentOptions={options}
            fixedHeader
            loading={loading}
            persistTableHead
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
