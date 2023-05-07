'use client';
import React, { useState } from 'react';
import { StreamCard } from './StreamCard';
import { Card, Button, Modal, Label, TextInput } from 'flowbite-react';
import { Room } from '@types';
import { useCreateRoom } from '@hooks/useRooms';
import { useRouter } from 'next/navigation';

const CreateRoomModal: React.FC<{ show: boolean; onClose: () => void }> = ({
  show,
  onClose,
}) => {
  const createRoom = useCreateRoom();
  const router = useRouter();

  const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const formData = new FormData(ev.target as HTMLFormElement);
    const { id } = await createRoom({
      name: formData.get('name') as string,
      description: formData.get('description') as string,
    });
    router.push(`/stream/${id}`);
  };

  return (
    <Modal
      show={show}
      size="md"
      popup={true}
      onClose={onClose}
      dismissible={true}
    >
      <Modal.Header />
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Create Your Room
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Room Name" />
              </div>
              <TextInput id="name" name="name" required={true} />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="description" value="Description" />
              </div>
              <TextInput id="description" name="description" required={true} />
            </div>
            <div className="w-full">
              <Button type="submit">Create</Button>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export const StreamBrowser: React.FC<{
  activeStreams: Room[];
}> = ({ activeStreams }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <main className="flex flex-col justify-center p-4 md:flex-row md:p-8">
      <CreateRoomModal
        show={showModal}
        onClose={() => setShowModal(!showModal)}
      />
      {activeStreams.length > 0 ? (
        <div className="flex flex-row flex-wrap gap-3 justify-center">
          {activeStreams.map((stream) => (
            <StreamCard {...stream} key={`stream-${stream.id}`} />
          ))}
        </div>
      ) : (
        <Card className="text-center">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            There are no streams happening at the moment
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            You can try again latter or start your own stream!
          </p>
          <Button onClick={() => setShowModal(true)}>
            Start Streaming Now!
          </Button>
        </Card>
      )}
    </main>
  );
};
