import React from 'react';
import { Geist, Geist_Mono } from 'next/font/google';

/* COMPONENTS */
import { ThemeProvider } from '@/components/theme-provider';

import './globals.css';

/* TYPES */
import type { Metadata } from 'next';
import type { ComponentsChildrenReq } from '@/type';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Radiance',
  description:
    'Website berisi roadmap, artikel, dan panduan bagi developer untuk mengembangkan karir.',
};

export default function RootLayout({ children }: ComponentsChildrenReq) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
