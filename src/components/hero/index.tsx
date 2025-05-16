import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="px-6 lg:px-8 border-b-1">
      <div className="mx-auto max-w-3xl pt-32 pb-16 md:pt-48 md:pb-24 lg:pt-56 lg:pb-28">
        <div className="md:text-center">
          <div className="flex gap-4 items-center md:justify-center">
            <Image
              src="/web-logo.png"
              alt="Webiste Logo"
              width={72}
              height={72}
              className="size-12 md:size-18"
            />
            <h1 className="text-5xl font-mono tracking-tight text-balance md:text-7xl">
              Radiance
            </h1>
          </div>
          <p className="mt-8 text-base md:text-lg">
            Sumber rangkuman topik esensial dan roadmaps belajar untuk
            developer, dikompilasi dari berbagai sumber di internet dengan
            bantuan AI untuk membantumu menentukan jalur karir teknologimu
          </p>
          <div className="mt-8 px-3 py-1 ring-1">
            <span className="text-xs md:text-sm">
              Konten topik dan roadmap bersumber dan terinspirasi dari
              komunitas&nbsp;
              <Link href="https://roadmap.sh/" target="_blank" className="link">
                roadmap.sh
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
