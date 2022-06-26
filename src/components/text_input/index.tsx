import React from 'react';
import { useController, UseControllerProps } from 'react-hook-form';

type FormValues = {
  FirstName: string;
};

const Input = (props: UseControllerProps<FormValues>) => {
  const { name } = props;
  const { field, fieldState } = useController(props);
  return (
    <div className="">
      <div className="relative">
        <input
          {...field}
          placeholder={name}
          className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm
              rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 p-2.5
              dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
              dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        {fieldState.error && (
          <span className="absolute bottom--2 mb-5 flex block items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            {fieldState.error.message}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
