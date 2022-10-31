/**
 * Home Page
 */
import React, { useState } from 'react';
// Application
import Header from 'components/layout/Header';
import SidePanel from 'components/sidepanel/sidepanel';

const Home = (): JSX.Element => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  return (
    <main className='relative h-screen z-50 flex flex-col overflow-hidden'>
      <Header setIsPanelOpen={setIsPanelOpen} />
      <SidePanel isPanelOpen={isPanelOpen} />
    </main>
  );
}

export default Home;
