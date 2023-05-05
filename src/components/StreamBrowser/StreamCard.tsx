'use client';
import React from 'react';
import { Card, Badge } from 'flowbite-react';
import { StreamThumb } from '@/util/types';

export const StreamCard: React.FC<StreamThumb> = ({
  profilePicture,
  streamer,
  tags,
  bio,
}) => {
  return (
    <div className="max-w-sm">
      <Card imgSrc={profilePicture}>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {streamer}
        </h5>
        <div className="flex flex-row gap-1">
          {tags &&
            tags.map((tag, index) => (
              <Badge color="gray" key={`tag-${index}`}>
                {tag}
              </Badge>
            ))}
        </div>
        <p className="font-normal text-gray-700 dark:text-gray-400">{bio}</p>
      </Card>
    </div>
  );
};
