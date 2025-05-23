import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="px-6 lg:px-8">
      <div className="mx-auto max-w-3xl py-16 md:py-24 lg:py-28">
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
          <div className="mt-8 px-3 py-1 ring-1">
            <span className="typography-label-sm font-medium">
              Isi konten dan topik bersumber dan terinspirasi dari
              komunitas&nbsp;
              <Link
                href="https://roadmap.sh/"
                target="_blank"
                className="link-primary"
              >
                roadmap.sh
              </Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
