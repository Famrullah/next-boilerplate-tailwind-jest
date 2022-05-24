import {
  AiOutlineDashboard, AiTwotoneFileAdd, AiOutlineCreditCard, AiFillBank,
} from 'react-icons/ai';

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
  { title: 'dashboard', icon: AiOutlineDashboard, link: '/dashboard' },
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
    title: 'Accounts', icon: AiOutlineCreditCard, link: '', gap: true,
  },
  {
    title: 'Schedule ',
    icon: AiFillBank,
    link: '',
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
  { title: 'Search', icon: AiTwotoneFileAdd, link: '' },
  { title: 'Analytics', icon: AiTwotoneFileAdd, link: '' },
  {
    title: 'Files ', icon: AiOutlineCreditCard, link: '', gap: true,
  },
  { title: 'Setting', icon: AiFillBank, link: '' },
];
