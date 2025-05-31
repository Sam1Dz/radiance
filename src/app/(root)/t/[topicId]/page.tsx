'use client';

import React from 'react';
import { useParams } from 'next/navigation';

/* COMPONENTS */
import HeroTopic from '@/components/hero-topic';
import TopicCard from '@/components/topic-card';
// shadcn/ui
import { Separator } from '@/components/ui/separator';

/* DATABASE */
import { getTopics } from '@/database/utils';

/* TYPES */
import type { Topics } from '@/type';

export default function TopicPage() {
  const { topicId } = useParams<{ topicId: string }>();

  const { uid, title, description, topics } = React.useMemo(() => {
    return getTopics(topicId) as Topics;
  }, [topicId]);

  return (
    <main>
      <HeroTopic title={title} description={description!} />
      <Separator className="bg-foreground" />
      <section>
        <div className="mx-auto max-w-7xl px-4 py-8 md:py-12 lg:py-14 xl:px-0">
          <div className="grid grid-cols-3 gap-4">
            {topics?.map((topic) => (
              <TopicCard
                key={topic.uid}
                {...topic}
                link={`/t/${uid}/l/${topic.uid}`}
                className="col-span-3 md:col-span-1"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
