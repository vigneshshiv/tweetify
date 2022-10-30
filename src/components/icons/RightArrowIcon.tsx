/**
 * Right Arrow Icon
 */
import cn from 'classnames';
import { withSize } from './IconStyle';

export const RightArrowIcon = withSize(({ sizeClass }): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={cn(sizeClass, 'stroke-slate-700 group-hover:stroke-slate-900 dark:stroke-gray-500 dark:group-hover:stroke-gray-900')}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
    />
  </svg>
));