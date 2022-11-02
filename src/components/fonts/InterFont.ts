/**
 * Inter Font
 */
import { Inter } from '@next/font/google';

const InterFont = Inter({
  style: 'normal',
  display: 'swap',
  weight: ['400', '700'],
  subsets: ['latin'],
  preload: true
});

export default InterFont;