/* COMPONENTS */
import Hero from '@/components/hero';
import TopicCard from '@/components/topic-card';
// shadcn/ui
import { SeparatorText } from '@/components/ui/separator';

export default function Home() {
  return (
    <>
      <Hero />
      <section>
        <SeparatorText
          text="Role Based Roadmap"
          color="foreground"
          overrideStyle={{
            base: 'mx-auto max-w-7xl px-4 xl:px-0',
            text: 'uppercase',
          }}
        />
        <div className="mx-auto max-w-7xl px-4 py-8 md:py-12 lg:py-14 xl:px-0">
          <div className="grid grid-cols-3 gap-4">
            <TopicCard
              title="Frontend Developer"
              description="Panduan untuk menjadi modern frontend developer"
              topics={115}
              className="col-span-3 md:col-span-1"
            />
            <TopicCard
              title="Backend Developer"
              description="Panduan untuk menjadi modern backend developer"
              topics={137}
              className="col-span-3 md:col-span-1"
            />
            <TopicCard
              title="Full Stack Developer"
              description="Panduan untuk menjadi modern full stack developer"
              topics={37}
              className="col-span-3 md:col-span-1"
            />
          </div>
        </div>
      </section>
    </>
  );
}
