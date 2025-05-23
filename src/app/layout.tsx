import React from 'react';
import { Roboto_Mono, JetBrains_Mono } from 'next/font/google';

/* COMPONENTS */
import { Provider } from '@/components/theme/provider';

import './globals.css';

/* TYPES */
import type { ComponentsChildrenReq } from '@/type';

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
});

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jet-brains-mono',
  subsets: ['latin'],
});

export default function RootLayout({ children }: ComponentsChildrenReq) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${robotoMono.variable} ${jetBrainsMono.variable}`}>
        <Provider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </Provider>
      </body>
    </html>
  );
}
