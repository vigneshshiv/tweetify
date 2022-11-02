/**
 * Side Panel
 */
import cn from 'classnames';
import ColorCard from './colorcard';
import FontCard from './fontcard';
import SizeCard from './sizecard';
import TemplateCard from './templatecard';

const SidePanel = ({ isPanelOpen }: { isPanelOpen: boolean }): JSX.Element => {
  return (
    <aside
      className={cn('h-full w-60 self-end overflow-hidden p-2 transition-transform duration-200 ease-out lg:translate-x-0', 
        isPanelOpen ? 'translate-x-0' : 'translate-x-60')}
    >
      <div
        className='scrollbar h-full overflow-y-auto rounded-md text-sm shadow-[1px_1px_5px_rgba(0,0,0,0.25)] dark:bg-secondary-dark dark:[&_h2]:text-white'
      >
        <SizeCard />
        <ColorCard />
        <FontCard />
        <TemplateCard />
      </div>
    </aside>
  );
}

export default SidePanel;