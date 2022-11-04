/**
 * Home Page
 */
import React, { useRef, useState } from 'react';
// Application
import Header from 'components/layout/Header';
import SidePanel from 'components/sidepanel/sidepanel';
import TweetCard from 'components/tweet/TweetCard';
import ExportButton from 'components/tweet/ExportButton';

const Home = (): JSX.Element => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const rootRef = useRef(null);

  return (
    <main className='relative h-screen z-50 flex flex-col overflow-hidden'>
      <Header setIsPanelOpen={setIsPanelOpen} />
      <SidePanel isPanelOpen={isPanelOpen} />
      <div className='absolute flex items-center justify-center inset-0 z-[-10] dark:bg-primary-dark'>
        <TweetCard rootRef={rootRef} />
      </div>
      <div className='absolute w-full h-12 bottom-8 flex justify-center z-[-5]'>
        <ExportButton rootRef={rootRef} />
      </div>
    </main>
  );
}

export default Home;
