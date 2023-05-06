import { StreamChat } from '@/components/StreamChat/StreamChat';

export default function Page({ params }: { params: { id: string } }) {
  console.log({ params });
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-2/3">
        <video className="w-full h-auto max-w-full" controls>
          <source src="/docs/videos/flowbite.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="md:w-1/3">
        <StreamChat />
      </div>
    </div>
  );
}
