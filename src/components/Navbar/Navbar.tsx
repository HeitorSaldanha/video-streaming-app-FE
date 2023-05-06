'use client';
import {
  Navbar as NavbarFlowbite,
  DarkThemeToggle,
  Flowbite,
  TextInput,
} from 'flowbite-react';
import Image from 'next/image';
import React from 'react';

export const TopNavBar: React.FC = () => {
  return (
    <NavbarFlowbite fluid={true} rounded={false}>
      <NavbarFlowbite.Brand>
        <Image src="/icon.png" width={35} height={35} alt="Navbar Logo" />
        <span className="pl-3 self-center whitespace-nowrap text-xl font-semibold text-gray-700 dark:text-gray-400">
          STREAMIFY
        </span>
      </NavbarFlowbite.Brand>
      <NavbarFlowbite.Toggle />
      <div className="flex order-15 md:order-2">
        <Flowbite>
          <DarkThemeToggle />
        </Flowbite>
      </div>
      <NavbarFlowbite.Collapse className="!w-2/6">
        <TextInput
          type="search"
          id="search-dropdown"
          className="w-full text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
          placeholder="Search Mockups, Logos, Design Templates..."
          required
        />
      </NavbarFlowbite.Collapse>
    </NavbarFlowbite>
  );
};
