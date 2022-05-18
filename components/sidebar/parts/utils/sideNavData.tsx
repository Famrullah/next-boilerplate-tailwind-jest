import { AiOutlineDashboard, AiTwotoneFileAdd } from 'react-icons/ai';

interface ISidenav {
  text: string,
  link: string,
  icon: any
}

export const sideNavData: ISidenav[] = [
  {
    text: 'Beranda',
    link: '/#',
    icon: AiOutlineDashboard,
  },
  {
    text: 'Pengajuan',
    link: '/#',
    icon: AiTwotoneFileAdd,
  },
];
