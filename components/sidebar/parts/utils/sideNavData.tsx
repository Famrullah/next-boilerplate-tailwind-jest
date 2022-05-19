import { AiOutlineDashboard, AiTwotoneFileAdd } from 'react-icons/ai';

interface IChildren {
  text: string,
  link: string,
  icon: any,
  children?: any[]
}
interface ISidenav {
  text: string,
  link: string,
  icon: any,
  children?: IChildren[]
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
    children: [
      {
        text: 'Pinjaman',
        link: '/#',
        icon: AiOutlineDashboard,
        children: [
          {
            text: 'KPR',
            link: '/#',
            icon: AiOutlineDashboard,
          },
          {
            text: 'KTA',
            link: '/#',
            icon: AiOutlineDashboard,
          },
        ],
      },
      {
        text: 'Pembukaan Rekening',
        link: '/#',
        icon: AiTwotoneFileAdd,
      },
    ],
  },
];
