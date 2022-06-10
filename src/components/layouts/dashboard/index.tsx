import React from 'react';
import Image from 'next/image';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import Sidebar from '@/components/sidebar';
import useStore from '@/store/useStore';

const AppLayout = ({ children }: any) => {
  const { getData, setIsOpen } = useStore((state) => state);
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="relative flex flex-col z-50 flex-1 overflow-y-auto overflow-x-hidden">
        <div className="relative">
          <div className="sticky top-0 bottom-0 left-0 right-0 shadow-md w-full py-5 px-5 top  flex flex-row">
            <div
              className="cursor-pointer"
              aria-hidden
              onClick={() => setIsOpen()}
            >
              {!getData() ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
            </div>
            <div className="basis-1/3 absolute right-5 top-3 cursor-pointer">
              <div className="relative inline-block">
                <Image src="/user.jpeg" width={30} height={30} className="inline-block object-cover w-12 h-10 rounded-full" />
                <span className="absolute bottom-1 right-0 inline-block w-3 h-3 bg-green-600 border-2 border-white rounded-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="p-5 overflow-auto h-screen relative -z-20">{children}</div>
      </div>
    </div>
  );
};
export const getLayout = (page) => <AppLayout>{page}</AppLayout>;
export default AppLayout;
