'use client';
import React from 'react';
import { Card, Badge } from 'flowbite-react';
import Link from 'next/link';
import { Room } from '@types';

export const StreamCard: React.FC<Room> = ({
  id,
  name,
  enabled,
  description,
  customer,
}) => {
  return (
    <div className="max-w-sm">
      <Link href={`/stream/${id}`}>
        <Card>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
            {customer}
          </h5>
          {/*
        <div className="flex flex-row gap-1">
          {tags &&
            tags.map((tag, index) => (
              <Badge color="gray" key={`tag-${index}`}>
                {tag}
              </Badge>
            ))}
        </div>
        */}
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </Card>
      </Link>
    </div>
  );
};
