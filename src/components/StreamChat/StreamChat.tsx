'use client';
import React from 'react';

import { Label, Card } from 'flowbite-react';

export const MessageInput: React.FC = () => {
  return (
    <>
      <Label htmlFor="chat" className="sr-only">
        Your message
      </Label>
      <div className="flex items-center px-3 py-2 bg-gray-50 dark:bg-gray-700">
        <textarea
          id="chat"
          rows={1}
          className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Your message..."
        ></textarea>
        <button
          type="submit"
          className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
        >
          <svg
            aria-hidden="true"
            className="w-6 h-6 rotate-90"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
          </svg>
          <span className="sr-only">Send message</span>
        </button>
      </div>
    </>
  );
};

const ChatWindow: React.FC = () => {
  const messages = [{ user: 'Dudu', timeStamp: '0:28', content: 'Olá' }];
  return (
    <div className="p-2 bg-gray-200 dark:bg-gray-900 h-full w-full">
      {messages.map((message) => (
        <Card key={`${message.user}-${message.timeStamp}`}>
          <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
            <span className="font-medium">{message.timeStamp} </span>
            <span className="font-bold">{message.user}: </span>
            {message.content}
          </p>
        </Card>
      ))}
    </div>
  );
};

export const StreamChat: React.FC = () => {
  return (
    <form className="h-full">
      <div className="flex flex-col h-full">
        <div className="h-full w-full">
          <ChatWindow />
        </div>
        <div className="self-end w-full">
          <MessageInput />
        </div>
      </div>
    </form>
  );
};
