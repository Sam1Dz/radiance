import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground py-8">
      <div className="mx-auto max-w-7xl px-4 xl:px-0">
        <div className="typography-label-sm flex flex-col-reverse items-center justify-between gap-4 md:flex-row">
          <div className="flex max-w-sm flex-col gap-4 text-center md:gap-0 md:text-left">
            <p>&copy;2025 Radiance</p>
            <span className="typography-label-sm text-muted-foreground">
              Isi Konten dan topik bersumber dan terinspirasi dari
              komunitas&nbsp;
              <Link
                href="https://roadmap.sh/"
                target="_blank"
                className="link-secondary"
              >
                roadmap.sh
              </Link>
            </span>
          </div>
          <div className="flex items-center gap-1 md:justify-center">
            <Image
              src="/web-logo.png"
              alt="Webiste Logo"
              width={28}
              height={28}
              className="size-3.5 md:size-7"
            />
            <p>
              <span className="text-foreground font-mono font-semibold">
                Radiance
              </span>
              &nbsp;by&nbsp;
              <Link
                href="https://github.com/Sam1Dz"
                target="_blank"
                className="link-secondary"
              >
                Sam1Dz
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
