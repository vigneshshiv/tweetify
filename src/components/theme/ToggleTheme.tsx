/**
 * Dark Mode theme
 */
'use client';

import { useEffect, useState } from 'react';
import { DarkTheme } from 'components/icons/DarkTheme';
import { LiteTheme } from 'components/icons/LiteTheme';

export const ToggleTheme = (): JSX.Element => {
  const [mounted, setMounted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  // After mounting, we have access to the theme
  useEffect(() => {
    setMounted(true);
    setDarkMode(JSON.parse(localStorage.getItem('darkMode') || "false"));
  }, []);

  const changeTheme = () => {
    let darkTheme = !darkMode;
    localStorage.setItem('darkMode', JSON.stringify(darkTheme));
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
    setDarkMode(darkTheme);
  }

  return (
    <button
      aria-label='Toggle Theme'
      type='button'
      className='w-9 h-9 flex items-center justify-center bg-neutral-100 rounded-lg border hover:ring-1 ring-gray-300 transition-all dark:bg-gray-600'
      onClick={changeTheme}
    >
      {mounted && (
        darkMode ? <DarkTheme size='lg' /> : <LiteTheme size='lg' />
      )}
    </button>
  );
};
