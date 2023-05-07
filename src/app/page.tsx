'use client';
import { useState, useEffect } from 'react';
import { StreamBrowser } from '@components/StreamBrowser';
import { useListRooms } from '@hooks/useRooms';
import { Room } from '@types';

function Home() {
  const [activeStreams, setActiveStreams] = useState<Room[]>([]);
  const listRooms = useListRooms();
  useEffect(() => {
    const fetchRooms = async () => {
      const roomsList = await listRooms();
      setActiveStreams(roomsList.data.filter((room: Room) => room.enabled));
    };
    fetchRooms();
  }, []);
  return (
    <>
      <StreamBrowser activeStreams={activeStreams} />
    </>
  );
}
export default Home;
