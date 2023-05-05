'use client';
import { StreamBrowser } from '@/components/StreamBrowser';

export default function Page({ params }: { params: { id: string } }) {
  console.log({ params });
  return (
    <>
      <StreamBrowser />
    </>
  );
}
