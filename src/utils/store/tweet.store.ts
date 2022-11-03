/**
 * Tweet Store
 */
import create from 'zustand';
// Application
import { TweetState } from 'utils/types/base.types';
import { defaultTweet } from 'shared/base.data';

export const useTweetStore = create<TweetState>((set) => ({
  tweetInfo: defaultTweet.tweetInfo,
  isMetricsVisible: defaultTweet.isMetricsVisible,
  setTweetInfo(callback) {
    set(({ tweetInfo }) => ({
      tweetInfo: callback(tweetInfo)
    }));
  },
  setIsMetricsVisible(callback) {
    set(({ isMetricsVisible }) => ({
      isMetricsVisible: callback(isMetricsVisible)
    }));
  }
}));