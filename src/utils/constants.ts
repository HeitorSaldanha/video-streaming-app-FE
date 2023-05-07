export const API_100MS = 'https://api.100ms.live/v2/';

export const ROOMS_API = `${API_100MS}rooms`;

export const AUTHORIZATION_HEADER_100MS = {
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_MANAGEMENT_TOKEN_100MS}`,
};
