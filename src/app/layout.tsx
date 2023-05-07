'use client';
import './globals.css';
import { Inter } from 'next/font/google';
import { TopNavBar } from '@components/Navbar';
import { HMSRoomProvider } from '@100mslive/react-sdk';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>STREAMIFY</title>
      </head>
      <HMSRoomProvider>
        <body className={inter.className}>
          <TopNavBar />
          {children}
        </body>
      </HMSRoomProvider>
    </html>
  );
}

