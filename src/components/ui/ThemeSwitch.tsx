'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [iconAnimation, setIconAnimation] = useState('icon-enter');

  useEffect(() => {
    setMounted(true);
    setTimeout(() => {
      setIconAnimation('icon-enter-active');
    }, 100);
  }, []);

  const handleClick = () => {
    setIconAnimation('icon-enter');
    setTimeout(() => {
      setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
      setTimeout(() => {
        setIconAnimation('icon-enter-active');
      }, 100);
    }, 300);
  };

  if (!mounted)
    return (
      <div
        className="w-6 h-6 animate-pulse bg-gray-400 dark:bg-neutral-700 rounded-full"
        aria-hidden="true"
      />
    );

  return (
    <button
      type="button"
      onClick={handleClick}
      className="focus:outline-none focus:ring-2 focus:ring-violet-500 rounded-full text-sm h-6 w-6 flex items-center justify-center"
      aria-label={`Cambiar a modo ${
        resolvedTheme === 'dark' ? 'claro' : 'oscuro'
      }`}
    >
      {resolvedTheme === 'dark' ? (
        <SunIcon
          className={`w-6 h-6 text-white hover:text-violet-300 dark:hover:text-violet-400 icon-transition ${iconAnimation}`}
          aria-hidden="true"
        />
      ) : (
        <MoonIcon
          className={`w-6 h-6 text-white hover:text-violet-300 dark:hover:text-violet-400 icon-transition ${iconAnimation}`}
          aria-hidden="true"
        />
      )}
    </button>
  );
};
