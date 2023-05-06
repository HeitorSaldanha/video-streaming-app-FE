import { API_100MS } from '@constants';

export const useListRooms = async () => {
  const listRoomsApi = `${API_100MS}rooms`;
  return await fetch(listRoomsApi, {
    method: 'GET',
    headers: { Authorization: `Bearer ${process.env.MANAGEMENT_TOKEN_100MS}` },
  });
};
