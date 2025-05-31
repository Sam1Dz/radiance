interface HeroTopicProps {
  title: string;
  description: string;
}

export default function HeroTopic({ title, description }: HeroTopicProps) {
  return (
    <section className="hero-container max-w-7xl py-8 md:py-12 lg:py-14">
      <h1 className="typography-title-lg md:typography-display-sm font-mono text-balance">
        {title}
      </h1>
      <p className="typography-label-sm md:typography-label-lg">
        {description}
      </p>
    </section>
  );
}
