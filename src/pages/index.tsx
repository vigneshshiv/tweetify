/**
 * Home Page
 */

import Header from 'components/layout/Header';

const Home = (): JSX.Element => {
  return (
    <main className='relative h-screen z-50 flex flex-col overflow-hidden'>
      <Header />      
    </main>
  );
}

export default Home;
