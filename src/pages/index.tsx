/**
 * Home Page
 */
import React, { useState } from 'react';
// Application
import Header from 'components/layout/Header';

const Home = (): JSX.Element => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  return (
    <main className='relative h-screen z-50 flex flex-col overflow-hidden'>
      <Header setIsPanelOpen={setIsPanelOpen} />      
    </main>
  );
}

export default Home;
