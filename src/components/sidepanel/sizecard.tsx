/**
 * Size Card
 */
// Application
import { useCardStore } from 'utils/store/card.store';
import SizeInput from './sizeinput';

const SizeCard = (): JSX.Element => {
  // Width
  const cardWidth = useCardStore((state) => state.width);
  const setWidth = useCardStore((state) => state.setWidth);
  // Height
  const cardHeight = useCardStore((state) => state.height);
  const setHeight = useCardStore((state) => state.setHeight);
  // Radius
  const radius = useCardStore((state) => state.radius);
  const setRadius = useCardStore((state) => state.setRadius);
  // Opacity
  const opacity = useCardStore((state) => state.opacity);
  const setOpacity = useCardStore((state) => state.setOpacity);

  // Each has it's own size dispatcher
  return (
    <div className='firefox-padding-fix p-5 pr-3'>
      <h2 className='font-bold'>Card</h2>
      <form className='-mx-3 mt-4 grid grid-cols-2 gap-y-1 gap-x-2'>
        <SizeInput label='W' data={cardWidth} action={setWidth} />
        <SizeInput label='H' data={cardHeight} action={setHeight} />
        <SizeInput label='R' data={radius} action={setRadius} />
        <SizeInput label='O' data={opacity} action={setOpacity} />
      </form>
    </div>
  );
}

export default SizeCard;