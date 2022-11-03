/**
 * Home Page
 */
import React, { useRef, useState } from 'react';
// Application
import Header from 'components/layout/Header';
import SidePanel from 'components/sidepanel/sidepanel';
import TweetCard from 'components/tweet/TweetCard';

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
      {/* Export */}
    </main>
  );
}

export default Home;
