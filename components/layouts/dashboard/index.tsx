import React from 'react';
import Image from 'next/image';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import Sidebar from '../../sidebar';
import useStore from '../../../store/useStore';

const AppLayout = ({ children }: any) => {
  const setIsOpen = useStore((state) => state.setIsOpen);
  const isOpen = useStore((state) => state.getData());
  return (
    <div className="flex">
      <Sidebar />
      <div className="h-screen flex-1">
        <div className="relative">
          <div className="fixed shadow-md w-full py-5 px-5 top relative flex flex flex-row">
            <div
              className="cursor-pointer"
              aria-hidden
              onClick={() => setIsOpen()}
            >
              {!isOpen ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
            </div>
            <div className="basis-1/3 absolute right-5 top-3 cursor-pointer">
              <div className="relative inline-block">
                <Image src="/user.jpeg" width={30} height={30} className="inline-block object-cover w-12 h-10 rounded-full" />
                <span className="absolute bottom-1 right-0 inline-block w-3 h-3 bg-green-600 border-2 border-white rounded-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
};
export const getLayout = (page) => <AppLayout>{page}</AppLayout>;
export default AppLayout;
