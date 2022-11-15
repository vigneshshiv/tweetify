/**
 * Base Data
 */
import ComicNeueFont from 'components/fonts/ComicNeueFont';
import InterFont from 'components/fonts/InterFont';
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
  height: 374,
  width: 724,
  radius: 16,
  opacity: 70
};

// Fonts
const fonts = [
  {
    id: 'system-ui',
    name: 'System UI', 
    value: null
  },
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
    from: '#FC5C7D',
    to: '#6A82FB'
  },
  {
    id: 2,
    from: '#159957',
    to: '#155799'
  },
  {
    id: 3,
    from: '#BCE784',
    to: '#5DD39E'
  },
  {
    id: 4,
    from: '#F8856F',
    to: '#F43C64'
  },
  {
    id: 5,
    from: '#F79D00',
    to: '#64F38C'
  },
  {
    id: 6,
    from: '#F12711',
    to: '#F5AF19'
  },
  {
    id: 7,
    from: '#536976',
    to: '#292E49'
  },
  {
    id: 8,
    from: '#76a7f4',
    to: '#6071d7'
  },
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
    createdAt: '2022-11-13T23:34:51.000Z',
    retweets: 542,
    replies: 3170,
    likes: 67221
  },
  isMetricsVisible: false,
}