/**
 * Base Data
 */
import ComicNeueFont from 'components/fonts/ComicNeueFont';
import InterFont from 'components/fonts/InterFont';
import ReggaeOneFont from 'components/fonts/ReggaeOneFont';
import RobotoSlabFont from 'components/fonts/RobotoFont';
import TelexFont from 'components/fonts/TelexFont';
import { Template } from 'utils/types/base.types';
import tweet from './tweet.json';

export const SizeConfigRange = {
  MIN_WIDTH: 500,
  MIN_HEIGHT: 300,
  MIN_OPACITY: 0,
  MAX_OPACITY: 100,
  MIN_RADIUS: 0
}

// Size Config
export const defaultSize = {
  height: 332,
  width: 672,
  radius: 16,
  opacity: 70
};

// Fonts
const fonts = [
  {
    id: 'Roboto+Slab',
    name: 'Roboto', 
    value: RobotoSlabFont
  },
  {
    id: 'Comic+Neue',
    name: 'Comic Neue',
    value: ComicNeueFont
  },
  {
    id: 'Inter',
    name: 'Inter',
    value: InterFont
  },
  {
    id: 'Reggae+One',
    name: 'Reggae One',
    value: ReggaeOneFont
  },
  {
    id: 'Telex',
    name: 'Telex',
    value: TelexFont
  }
]

export const defaultFonts = {
  fonts: fonts,
  selectedFont: fonts[0]
}

// Default Arrow State
export const arrowState = {
  isArrowVisible: false,
  X: 0,
  Y: 0
}

// Color Gradients
const gradientColors = [
  {
    id: 1,
    from: '#F12711',
    to: '#F5AF19'
  },
  {
    id: 2,
    from: '#FC5C7D',
    to: '#6A82FB'
  },
  {
    id: 3,
    from: '#BCE784',
    to: '#5DD39E'
  },
  {
    id: 4,
    from: '#159957',
    to: '#155799'
  },
  {
    id: 5,
    from: '#76a7f4',
    to: '#6071d7'
  },
  {
    id: 6,
    from: '#F79D00',
    to: '#64F38C'
  },
  {
    id: 7,
    from: '#536976',
    to: '#292E49'
  },
  {
    id: 8,
    from: '#EECDA3',
    to: '#EF629F'
  }
]

export const defaultGradients = {
  gradients: gradientColors,
  selectedGradient: gradientColors[0]
}

// Template
export const defaultTemplate = {
  selectedTemplate: 'standard' as Template
}

// Panel State
export const defaultPanel = {
  isSpaceDown: false,
  isMouseDown: false,
  moveBy: { X: 0, Y: 0 }
}

// Tweet Data
export const defaultTweet = {
  tweetInfo: {
    profileImage: tweet.profileImage,
    name: 'Elon Musk',
    username: 'elonmusk',
    text: "It's not possible to learn everything.\n\nGreat software engineers are not those who know everything but those who can solve problems and adapt.",
    retweets: 542,
    replies: 3170,
    likes: 67221,
  },
  isMetricsVisible: false,
}