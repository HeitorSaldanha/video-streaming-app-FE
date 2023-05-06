'use client';
import React, { useState } from 'react';
import { StreamCard } from './StreamCard';
import { Card } from 'flowbite-react';
import {
  useHMSActions,
  useHMSStore,
  selectRoomState,
} from '@100mslive/react-sdk';
import { Room } from '@types';

export const StreamBrowser: React.FC<{
  activeStreams: Room[];
}> = ({ activeStreams }) => {
  return (
    <main className="flex flex-col justify-center p-4 md:flex-row md:p-8">
      {activeStreams ? (
        <div className="flex flex-row flex-wrap gap-3 justify-center">
          {activeStreams.map((stream) => (
            <StreamCard {...stream} key={`stream-${stream.id}`} />
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
