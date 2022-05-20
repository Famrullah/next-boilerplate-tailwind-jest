import {
  AiOutlineDashboard, AiTwotoneFileAdd, AiOutlineCreditCard, AiFillBank,
} from 'react-icons/ai';

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
        icon: AiFillBank,
      },
      {
        text: 'Pembukaan Rekening',
        link: '/#',
        icon: AiOutlineCreditCard,
      },
    ],
  },
  {
    text: 'Cuti',
    link: '/#',
    icon: AiTwotoneFileAdd,
    children: [
      {
        text: 'Melahirkan',
        link: '/#',
        icon: AiOutlineDashboard,
      },
      {
        text: 'Tahunan',
        link: '/#',
        icon: AiTwotoneFileAdd,
      },
      {
        text: 'Sakit',
        link: '/#',
        icon: AiTwotoneFileAdd,
      },
    ],
  },
];
