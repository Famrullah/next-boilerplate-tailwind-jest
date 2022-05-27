import {
  AiTwotoneFileAdd, AiOutlineCreditCard, AiFillBank,
} from 'react-icons/ai';
import { HomeIcon } from '@heroicons/react/solid';

  interface IChildren {
    title: string,
    link: string,
    icon: any,
    gap?: boolean,
    children?: any[]
  }

  interface ISidenav {
    title: string,
    link: string,
    icon: any,
    children?: IChildren[],
    gap?: boolean
  }

export const Menus: ISidenav[] = [
  { title: 'dashboard', icon: HomeIcon, link: '/dashboard' },
  {
    title: 'pengajuan',
    icon: AiTwotoneFileAdd,
    link: '#',
    children: [
      {
        title: 'pinjaman',
        link: '/pinjaman',
        icon: AiFillBank,
      },
      {
        title: 'Pembukaan Rekening',
        link: '/#',
        icon: AiOutlineCreditCard,
      },
    ],
  },
  {
    title: 'Accounts', icon: AiOutlineCreditCard, link: '',
  },
  {
    title: 'Files ', icon: AiOutlineCreditCard, link: '', gap: true,
  },
  { title: 'Setting', icon: AiFillBank, link: '' },
];
