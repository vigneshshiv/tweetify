/**
 * Application Header
 */

import * as React from 'react';
import Link from 'next/link';
// Application
import { ToggleTheme } from 'components/theme/ToggleTheme';
import TweetLinkInput from 'components/common/TweetLinkInput';
import TweetifyInfoGuide from 'components/common/TweetifyInfoGuide';

const Header = (): JSX.Element => {
  return (
    <header className='flex items-center justify-between gap-x-4 py-4 md:px-12 px-6'>
      <Link href='/' className='flex items-center justify-center'>
        <h1 className='text-2xl lg:text-4xl font-bold mr-4 lg:mx-0 bg-clip-text tracking-widest text-transparent bg-gradient-to-r from-green-400 to-indigo-500'>
          TWEETIFY
        </h1>
      </Link>
      <TweetLinkInput />
      <TweetifyInfoGuide />
      <div className='ml-4 sm:block'>
        <ToggleTheme />
      </div>
    </header>
  );
};

export default Header;
