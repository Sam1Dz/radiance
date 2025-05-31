import React from 'react';

/* COMPONENTS */
import Header from '@/components/header';

/* DATABASE */
import { getTopics } from '@/database/utils';

/* TYPES */
import type { Metadata } from 'next';
import type { ComponentsChildrenReq, Topics } from '@/type';

interface Props {
  params: Promise<{ topicId: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const uid = (await params).topicId;
  const topic = getTopics(uid) as Topics;

  return {
    title: `${topic.title} | Radiance`,
    description: `${topic.description} di Radiance. Sebuah web berisi sumber rangkuman topik esensial untuk developer, dikompilasi dari berbagai sumber di internet dengan bantuan AI untuk membantumu menentukan jalur karir teknologimu`,
  };
}

export default function AppLayout({ children }: ComponentsChildrenReq) {
  return (
    <React.Fragment>
      <Header />
      {children}
    </React.Fragment>
  );
}
