import React from 'react';

/* COMPONENTS */
import Footer from '@/components/footer';

/* TYPES */
import type { Metadata } from 'next';
import type { ComponentsChildrenReq } from '@/type';

export const metadata: Metadata = {
  title: 'Radiance',
  description:
    'Sumber rangkuman topik esensial untuk developer, dikompilasi dari berbagai sumber di internet dengan bantuan AI untuk membantumu menentukan jalur karir teknologimu',
};

export default function AppLayout({ children }: ComponentsChildrenReq) {
  return (
    <React.Fragment>
      {children}
      <Footer />
    </React.Fragment>
  );
}
