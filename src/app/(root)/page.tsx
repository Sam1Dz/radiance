'use client';

import React from 'react';

/* COMPONENTS */
import Hero from '@/components/hero';
import TopicCard from '@/components/topic-card';
// shadcn/ui
import { SeparatorText } from '@/components/ui/separator';

/* DATABASE */
import { readTopics } from '@/database/utils';

/* TYPES */
import type { Topics } from '@/type';

export default function Home() {
  const [topics, setTopics] = React.useState<Topics[]>([]);

  React.useEffect(() => {
    const getTopics = async () => {
      const data = await readTopics();
      setTopics(data);
    };
    getTopics().then(() => null);
  }, []);

  return (
    <>
      <Hero />
      <section>
        <SeparatorText
          text="Role Based"
          color="foreground"
          overrideStyle={{
            base: 'mx-auto max-w-7xl px-4 xl:px-0',
            text: 'uppercase',
          }}
        />
        <div className="mx-auto max-w-7xl px-4 py-8 md:py-12 lg:py-14 xl:px-0">
          <div className="grid grid-cols-3 gap-4">
            {topics.map((topic) => (
              <TopicCard
                key={topic.uid}
                {...topic}
                className="col-span-3 md:col-span-1"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
