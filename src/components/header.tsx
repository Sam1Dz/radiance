import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-primary/25">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className="-m-1.5 flex flex-row items-center gap-2 p-1.5"
          >
            <Image
              src="/web-logo.png"
              alt="Webiste Logo"
              width={32}
              height={32}
              className="size-8"
            />
            <p className="text-foreground font-mono font-semibold">Radiance</p>
          </Link>
        </div>
      </nav>
    </header>
  );
}
