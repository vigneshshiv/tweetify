/**
 * Application Header
 */

import React, { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
// Application
import { ToggleTheme } from 'components/theme/ToggleTheme';
import TweetLinkInput from 'components/common/TweetLinkInput';
import TweetifyInfoGuide from 'components/common/TweetifyInfoGuide';
import { GithubIcon } from 'components/icons/GithubIcon';
import { SidePanelIcon } from 'components/icons/SidePanelIcon';
// Types
import { Dispatcher } from 'utils/types/base.types';

interface PanelProps {
  setIsPanelOpen: (fn: (c: boolean) => boolean) => void;
}

const Header = ({ setIsPanelOpen }: { setIsPanelOpen: Dispatcher<boolean> }): JSX.Element => {
  return (
    <header className='flex items-center justify-between gap-x-4 py-3 md:pl-10 px-6'>
      <Link href='/' className='flex items-center justify-center'>
        <h1 className='text-2xl lg:text-4xl font-bold mr-4 lg:mx-0 bg-clip-text tracking-widest text-transparent bg-gradient-to-r from-green-400 to-indigo-500'>
          TWEETIFY
        </h1>
      </Link>
      <TweetLinkInput />
      <TweetifyInfoGuide />
      <div className='h-full w-auto pl-4 lg:w-56'>
        <div className='relative flex h-full items-center justify-end gap-x-4'>
          <a
            href='https://github.com/vigneshshiv'
            target='_blank'
            rel='noopener noreferrer'
            className='z-10'
          >
            <GithubIcon size='xl' />
          </a>
          <div className='relative z-10'>
            <ToggleTheme />
          </div>
          <button
            className='relative z-10 lg:hidden'
            onClick={() => setIsPanelOpen((c) => !c)}
          >
            <SidePanelIcon size='lg' />
          </button>
        </div>
      </div>      
    </header>
  );
}

export default Header;
