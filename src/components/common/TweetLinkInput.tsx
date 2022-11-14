/**
 * Tweet Link input
 */
import { RightArrowIcon } from 'components/icons/RightArrowIcon';
import { FormEventHandler, useState } from 'react';
import { useTweetStore } from 'utils/store/tweet.store';

const TweetLinkInput = (): JSX.Element => {
  const [url, setUrl] = useState("");
  // Tweet Store
  const setTweetInfo = useTweetStore((state) => state.setTweetInfo);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!url) return;
    const response = await fetch("api/tweet-service", {
      method: "POST",
      body: JSON.stringify({ tweetUrl: url })
    });
    const { includes, data } = await response.json();
    // Set TweetInfo for sync
    setTweetInfo(() => ({
      profileImage: includes.users[0].profile_image_url.replace("_normal", ""),
      name: includes.users[0].name,
      username: includes.users[0].username,
      text: data.text,
      createdAt: data.created_at,
      retweets: data.public_metrics.retweet_count,
      replies: data.public_metrics.reply_count,
      likes: data.public_metrics.like_count,
    }));
    // Update Url to blank
    setUrl("");
  }

  return (
    <form
      className='relative flex w-1/2 ml-auto'
      onSubmit={handleSubmit}
    >
      <input 
        type='text'
        placeholder='Paste tweet link here'
        value={url}
        className='w-full rounded-full px-6 py-2 text-sm border border-slate-300 focus:outline-none focus:ring-1 dark:bg-neutral-dark dark:text-white dark:placeholder-neutral-400 dark:border-none dark:focus:ring-1'
        onChange={(e) => setUrl(e.target.value)}
      />
      <button
        type='submit'
        className='group absolute w-14 items-center pl-4 justify-center right-0 inset-y-0 rounded-r-full bg-neutral-50 border border-slate-300 hover:bg-neutral-100 dark:bg-lite-dark dark:border-none dark:hover:bg-highlight-dark'
      >
        <RightArrowIcon size='lg' />
      </button>
    </form>
  );
}

export default TweetLinkInput;