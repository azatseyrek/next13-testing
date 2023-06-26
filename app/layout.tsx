import React from 'react';

import { Inter } from 'next/font/google';

import Footer from '@/components/footer';
import Header from '@/components/header';
import '@/styles/globals.css';
import '@/styles/reset.css';

const interFontFamily = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Testing',
  description: 'Automated testing for the modern web',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={interFontFamily.className}>
      <body className="customContainer">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
