'use client';
import React, { useEffect } from 'react';
import { StreamChat } from '@components/StreamChat/StreamChat';
import { useJoinRoom } from '@hooks/useRooms';
import { StreamVideo } from '@components/StreamVideo';

export default function Page({ params }: { params: { id: string } }) {
  const joinRoom = useJoinRoom();
  useEffect(() => {
    const handleJoin = async () => {
      await joinRoom(params.id, 'broadcaster', 'foo');
    };
    handleJoin();
  }, []);
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-2/3 h-full">
        <StreamVideo />
      </div>
      <div className="md:w-1/3">
        <StreamChat />
      </div>
    </div>
  );
}
