'use client';
import {
  Navbar as NavbarFlowbite,
  DarkThemeToggle,
  Flowbite,
} from 'flowbite-react';
import Image from 'next/image';
import React, { useState } from 'react';

export const TopNavBar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkMode = () => {
    if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
    }
  };

  return (
    <NavbarFlowbite fluid={false} rounded={true}>
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
      <NavbarFlowbite.Collapse>
        <NavbarFlowbite.Link href="/navbars" active={true}>
          Home
        </NavbarFlowbite.Link>
        <NavbarFlowbite.Link>About</NavbarFlowbite.Link>
        <NavbarFlowbite.Link href="/navbars">Services</NavbarFlowbite.Link>
        <NavbarFlowbite.Link href="/navbars">Pricing</NavbarFlowbite.Link>
        <NavbarFlowbite.Link href="/navbars">Contact</NavbarFlowbite.Link>
      </NavbarFlowbite.Collapse>
    </NavbarFlowbite>
  );
};
