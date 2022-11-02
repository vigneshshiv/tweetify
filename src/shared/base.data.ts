/**
 * Base Data
 */
import ComicNeueFont from 'components/fonts/ComicNeueFont';
import InterFont from 'components/fonts/InterFont';
import ReggaeOneFont from 'components/fonts/ReggaeOneFont';
import RobotoSlabFont from 'components/fonts/RobotoFont';
import TelexFont from 'components/fonts/TelexFont';

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
    from: '#FFFBD5',
    to: '#B20A2C'
  },
  {
    id: 4,
    from: '#159957',
    to: '#155799'
  },
  {
    id: 5,
    from: '#F79D00',
    to: '#64F38C'
  },
  {
    id: 6,
    from: '#00E1F4',
    to: '#0064F4'
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