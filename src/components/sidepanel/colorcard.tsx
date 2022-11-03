/**
 * Color Card
 */
import cn from 'classnames';
// Application
import { useGradientStore } from 'utils/store/gradient.store';

const ColorCard = (): JSX.Element => {
  // Gradient Store
  const gradients = useGradientStore((state) => state.gradients);
  const selectedGradient = useGradientStore((state) => state.selectedGradient);
  const setSelectedGradient = useGradientStore((state) => state.setSelectedGradient);

  return (
    <div className='firefox-padding-fix border-t p-5 pr-3 dark:border-lite-dark'>
      <h2 className='font-bold'>Colors</h2>
      <div className='mt-3 grid grid-cols-4 gap-3'>
        {gradients.map((gradient) => (
          <button
            key={gradient.id}
            style={{
              background: cn('linear-gradient(to bottom right, ', gradient.from, ', ', gradient.to, ')')
            }}
            className={cn(
              'h-9 w-9 rounded-lg', 
              Object.is(JSON.stringify(gradient), JSON.stringify(selectedGradient)) 
                ? 'ring-2 ring-blue-400' 
                : ''
            )}
            onClick={() => setSelectedGradient(() => gradient)}
          />
        ))}
      </div>
    </div>
  );
}

export default ColorCard;