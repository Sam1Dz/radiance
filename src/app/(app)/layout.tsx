/* TYPES */
import type { Metadata } from 'next';
import type { ComponentsChildrenReq } from '@/type';

export const metadata: Metadata = {
  title: 'Radiance',
  description:
    'Sebuah clone dari roadmap.sh. Berisi roadmap, artikel, dan panduan bagi developer untuk mengembangkan karir',
};

export default function AppLayout({ children }: ComponentsChildrenReq) {
  return children;
}
