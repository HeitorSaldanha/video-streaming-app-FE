import { StreamBrowser } from '@components/StreamBrowser';
import { useListRooms } from '@hooks/useRooms';

async function Home() {
  const roomsList = await useListRooms();
  return (
    <>
      <StreamBrowser activeStreams={roomsList || []} />
    </>
  );
}
export default Home;
