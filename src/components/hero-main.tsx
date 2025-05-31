import Image from 'next/image';

export default function HeroMain() {
  return (
    <section className="hero-container max-w-3xl py-16 md:py-24 lg:py-28">
      <div className="md:text-center">
        <div className="flex items-center gap-4 md:justify-center">
          <Image
            src="/web-logo.png"
            alt="Webiste Logo"
            width={72}
            height={72}
            className="size-12 md:size-18"
          />
          <h1 className="typography-display-sm md:typography-display-lg font-mono text-balance">
            Radiance
          </h1>
        </div>
        <p className="typography-body-sm md:typography-body-md mt-8">
          Sumber rangkuman topik esensial untuk developer, dikompilasi dari
          berbagai sumber di internet dengan bantuan AI untuk membantumu
          menentukan jalur karir teknologimu
        </p>
      </div>
    </section>
  );
}
