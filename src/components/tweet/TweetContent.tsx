/**
 * Tweet Content
 */
import { useEffect, useState } from 'react';
import Image from 'next/image';
import cn from 'classnames';
// Application
import { Template } from 'utils/types/base.types';
import { useCardStore } from 'utils/store/card.store';
import { useTemplateStore } from 'utils/store/template.store';
import { useTweetStore } from 'utils/store/tweet.store';

const TweetContent = (): JSX.Element => {
  // Tweet Info
  const tweetInfo = useTweetStore((state) => state.tweetInfo);
  const setTweetInfo = useTweetStore((state) => state.setTweetInfo);
  const { profileImage, name, username, text } = tweetInfo;
  // Template
  const selectedTemplate = useTemplateStore((state) => state.selectedTemplate);
  // Font and opacity
  const font = useCardStore((state) => state.font);
  const opacity = useCardStore((state) => state.opacity);

  // Firefox fix
  const [imageData, setImageData] = useState('');

  useEffect(() => {
    if (navigator.userAgent.indexOf('Firefox') > -1) {
      fetch('/api/get-image', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ imageUrl: profileImage })
      })
        .then((res) => res.json())
        .then((data) => {
          setImageData(data.imageData);
        });
    }
  }, [profileImage, setImageData]);

  return (
    <div
      style={{
        backgroundColor: cn('rgba(255,255,255,', (opacity/100)),
        fontFamily: font.value.style.fontFamily
      }}
      className='max-w-screen-sm rounded-xl bg-white/70 px-8 py-7 shadow-md backdrop-blur-md'
    >
      <div
        className={cn('flex gap-x-5 ', Object.is(selectedTemplate, 'justify' as Template) ? 'items-start' : 'items-center')}
      >
        <Image 
          src={imageData || profileImage}
          alt='profile-image'
          width={500}
          height={500}
          priority
          className='h-14 w-14 rounded-full'
        />
        <div>
          <div
            className={cn(Object.is(selectedTemplate, 'justify' as Template) ? 'flex items-center gap-x-2' : '')}
          >
            <h2 className='font-bold text-zinc-900'>{name}</h2>
            <p className='text-xs text-zinc-900'>@{username}</p>
          </div>
          <div
            className={cn('mt-2 text-zinc-900 ', Object.is(selectedTemplate, 'justify' as Template) ? 'block' : 'hidden')}
          >
            <div className='space-y-3'>
              {text.split('\n\n').map((content, idx) => (
                <p key={idx}>{content}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div 
        className={cn('mt-2 text-zinc-900 ', 
          Object.is(selectedTemplate, 'sleek' as Template) ? 'pl-[76px]' : '', 
          Object.is(selectedTemplate, 'justify' as Template) ? 'hidden' : 'block'
        )}
      >
        <div className='space-y-3'>
          {text.split('\n\n').map((content, idx) => (
            <p key={idx}>{content}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TweetContent;