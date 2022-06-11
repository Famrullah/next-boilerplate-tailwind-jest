import * as React from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
// import { ErrorMessage } from '@hookform/error-message';

type FormValues = {
  FirstName: string;
};

const Input = (props: UseControllerProps<FormValues>) => {
  const { name } = props;
  const { field } = useController(props);
  return (
    <input
      {...field}
      placeholder={name}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
  );
};

export default Input;
