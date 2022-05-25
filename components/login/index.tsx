import React from 'react';
import { LockClosedIcon, LockOpenIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import Link from 'next/link';

interface FormInputs {
  email: string,
  password: string
}

const LoginPage:React.FC = () => {
  const router = useRouter();
  const {
    register, formState: { errors, isValid }, handleSubmit,
  } = useForm<FormInputs>({ mode: 'onChange' });
  const goDashBoard = (data) => {
    console.log(data);
    router.push('/dashboard');
  };
  const onSubmit = (data: FormInputs) => goDashBoard(data);

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="mt-24">
          <img
            className="mx-auto h-12 w-auto"
            src="/vercel.svg"
            alt="Workflow"
          />
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md -space-y-px">
            <div>
              <input
                placeholder="Email"
                className="my-2 appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-stone-500 focus:border-stone-500 focus:z-10 sm:text-sm"
                {...register(
                  'email',
                  { required: 'wajib di isi' },
                )}
              />

              <ErrorMessage
                errors={errors}
                name="email"
                render={({ message }) => <p className="text-xs text-red-600 appearance-none border-none shadow-none">{message}</p>}
              />
            </div>
            <div>
              <input
                placeholder="password"
                type="password"
                className="my-2 appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-stone-500 focus:border-stone-500 focus:z-10 sm:text-sm"
                {...register(
                  'password',
                  { required: 'wajib di isi' },
                )}
              />

              <ErrorMessage
                errors={errors}
                name="password"
                render={({ message }) => <p className="text-red-600 text-xs">{message}</p>}
              />
            </div>

          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-stone-600 focus:ring-stone-500 border-gray-300 rounded"
              />
              <span className="ml-2 block text-sm text-gray-900">
                Remember me
              </span>
            </div>

            <div className="text-sm">
              <Link href="/#">
                <span className="font-medium text-stone-600 hover:text-stone-500">Forgot your password?</span>
              </Link>
            </div>
          </div>

          <div>
            <button
              disabled={!isValid}
              type="submit"
              className="disabled:bg-mineshaft30 disabled:cursor-not-allowed disabled:text-white bg-green-400 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white duration-500 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                {isValid ? <LockOpenIcon className="h-5 w-5 text-white duration-1000" aria-hidden="true" />
                  : <LockClosedIcon className="h-5 w-5 text-white duration-1000" aria-hidden="true" />}
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
