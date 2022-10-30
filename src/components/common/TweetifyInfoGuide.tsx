/**
 * Tweetify Info Guide
 */
import { useState } from 'react';
import cn from 'classnames';
import { GuideInfoIcon } from 'components/icons/GuideInfoIcon';

const TweetifyInfoGuide = (): JSX.Element => {
  const [isInfoGuideOpen, setInfoGuideOpen] = useState(false);

  return (
    <div className='relative h-10 w-10'>
      <button
        className='group flex w-5/6 h-5/6 items-center justify-center rounded-full bg-neutral-50 hover:bg-gray-100 dark:bg-gray-600 dark:hover:ring-1 ring-gray-300'
        onClick={() => setInfoGuideOpen((c) => !c)}
      >
        <GuideInfoIcon size='lg' />
      </button>
      <aside
        className={cn(
          'h-90 absolute -right-[108px] z-10 w-64 top-14 translate-y-40 self-end overflow-hidden rounded-mg bg-white opacity-1 shadow-[1px_1px_5px_rgba(0,0,0,0.25)] ease-out dark:bg-'
        )}
      >
        <h2 className='px-4 pt-6 font-bold text-gray-700 dark:text-white'>
          How to use the app
        </h2>
        <ul className='w-full h-full list-disc space-y-3 p-5 pl-8 pb-7 text-justify text-sm text-gray-700 dark:text-gray-300'>
          <li>
            To generate the tweet image, paste a tweet link into the input field above.
          </li>
          <li>
            To resize the card, move your mouse cursor to the card&apos;s edge.
          </li>
          <li>
            To move the card, press{' '}
            <span className='rounded bg-gray-200 px-1 pb-0.5 dark:bg-[#5c5c5c]'>
              space
            </span>
            and the left mouse button.
          </li>
          <li className='[&>span];font-semibold'>
            You can change the <span>color</span>, <span>width</span>,{' '}
            <span>height</span>, <span>border radius</span>,{' '}
            <span>layouts</span>, and many other settings in the side panel on
            the right.
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default TweetifyInfoGuide;