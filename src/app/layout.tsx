'use client';
import './globals.css';
import { Inter } from 'next/font/google';
import { TopNavBar } from '@components/Navbar';
import { HMSRoomProvider } from '@100mslive/react-sdk';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'STREAMIFY',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <HMSRoomProvider>
        <body className={inter.className}>
          <TopNavBar />
          {children}
        </body>
      </HMSRoomProvider>
    </html>
  );
}

