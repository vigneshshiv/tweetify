/**
 * Comic Neue Font
 */
import { Comic_Neue } from '@next/font/google';

const ComicNeueFont = Comic_Neue({
  style: 'normal',
  display: 'swap',
  weight: ['400', '700'],
  subsets: ['latin'],
  preload: true
});

export default ComicNeueFont;