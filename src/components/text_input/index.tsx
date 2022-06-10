import React from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

interface FormInputs {
    email: string,
}

const TextInput = () => {
  const { register, formState: { errors }, handleSubmit } = useForm<FormInputs>();
  const onSubmit = (data: FormInputs) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className="mb-5 appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-stone-500 focus:border-stone-500 focus:z-10 sm:text-sm"
        {...register(
          'email',
          { required: 'wajib di isi' },
        )}
      />

      <ErrorMessage
        errors={errors}
        name="email"
        render={({ message }) => <p className="text-red-600">{message}</p>}
      />
      <input type="submit" />
    </form>
  );
};

export default TextInput;
