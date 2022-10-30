/**
 * Tweet Link input
 */
import { RightArrowIcon } from 'components/icons/RightArrowIcon';
import { FormEventHandler, useState } from 'react';

const TweetLinkInput = (): JSX.Element => {
  const [url, setUrl] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    // TODO: API Call
  }

  return (
    <form
      className='relative flex w-1/2 mr-16'
      onSubmit={handleSubmit}
    >
      <input 
        type='text'
        placeholder='Paste tweet link here'
        value={url}
        className='w-full rounded-full px-6 py-2 text-sm border border-slate-300 focus:outline-none focus:ring-1 dark:bg-gray-50 dark:text-gray-900 dark:placeholder-neutral-400'
        onChange={(e) => setUrl(e.target.value)}
      />
      <button
        type='submit'
        className='group absolute w-14 items-center pl-4 justify-center right-0 inset-y-0 rounded-r-full bg-neutral-50 border border-slate-300 hover:bg-neutral-100 dark:bg-gray-50 dark:hover:bg-gray-100'
      >
        <RightArrowIcon size='lg' />
      </button>
    </form>
  );
}

export default TweetLinkInput;