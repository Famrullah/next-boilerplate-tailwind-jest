import React from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
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
          <div className="fixed shadow-md w-full p-5 top">
            <div
              aria-hidden
              onClick={() => setIsOpen()}
            >
              {!isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </div>
          </div>
        </div>
        <div className="p-5 mt-20">{children}</div>
      </div>
    </div>
  );
};
export const getLayout = (page) => <AppLayout>{page}</AppLayout>;
export default AppLayout;
