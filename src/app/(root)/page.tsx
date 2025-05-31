/* COMPONENTS */
import HeroMain from '@/components/hero-main';
import TopicCard from '@/components/topic-card';
// shadcn/ui
import { SeparatorText } from '@/components/ui/separator';

/* DATABASE */
import { getRawData } from '@/database/utils';

const data = getRawData();

export default function Home() {
  return (
    <main>
      <HeroMain />
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
            {data.role.map((topic) => (
              <TopicCard
                key={topic.uid}
                {...topic}
                link={`/t/${topic.uid}`}
                className="col-span-3 md:col-span-1"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
