'use client';
import React, { useState } from 'react';
import { StreamCard } from './StreamCard';
import { Card } from 'flowbite-react';

const mock = [
  {
    streamer: 'Alanzoka',
    tags: ['Idoso', 'Gostoso', 'Portugues'],
    bio: 'Alanzoka best from Brazil, yeah baby, huh, thanks',
    profilePicture:
      'https://static-cdn.jtvnw.net/jtv_user_pictures/64d44235-1dee-4bca-95da-bee1ee96eea3-profile_image-300x300.png',
  },
];

export const StreamBrowser: React.FC = () => {
  const [streamList, setStreamList] = useState(mock);
  return (
    <main className="flex flex-col justify-center p-4 md:flex-row md:p-8">
      {streamList ? (
        <div className="flex flex-row flex-wrap gap-3 justify-center">
          {streamList.map((stream, index) => (
            <StreamCard {...stream} key={`stream-${index}`} />
          ))}
        </div>
      ) : (
        <Card className="text-center" href="#">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            There are no streams happening at the moment
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            You can try again latter or start your own stream!
          </p>
        </Card>
      )}
    </main>
  );
};
