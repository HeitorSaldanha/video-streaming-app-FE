'use client';
import { useHMSActions } from '@100mslive/react-sdk';
import { ROOMS_API, AUTHORIZATION_HEADER_100MS } from '@constants';

export const useListRooms = () => {
  return async () => {
    const response = await fetch(ROOMS_API, {
      method: 'GET',
      headers: {
        ...AUTHORIZATION_HEADER_100MS,
      },
    });
    return await response.json();
  };
};

export const useJoinRoom = () => {
  const hmsActions = useHMSActions();
  const streamApiAuthUrl = `${process.env.NEXT_PUBLIC_BE_API}room/auth`;
  return async (room_id: string, role: string, userName: string) => {
    const response = await fetch(streamApiAuthUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: `${Date.now()}`,
        role,
        room_id,
      }),
    }).then((resp) => resp.json());
    const { access_token } = response;
    console.log({ access_token });
    hmsActions.join({
      userName,
      authToken: access_token,
    });
  };
};

export const useCreateRoom = () => {
  return async ({
    name,
    description,
  }: {
    name: string;
    description: string;
  }) => {
    const response = await fetch(ROOMS_API, {
      method: 'POST',
      headers: {
        ...AUTHORIZATION_HEADER_100MS,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        description,
      }),
    });
    return await response.json();
  };
};
