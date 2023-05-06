export interface StreamThumb {
  streamer: string;
  tags: string[];
  bio: string;
  profilePicture: string;
}

export interface Room {
  id: string;
  name: string;
  enabled: boolean;
  description: string;
  customer: string;
}
