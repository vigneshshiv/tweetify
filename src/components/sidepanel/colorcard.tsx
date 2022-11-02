/**
 * Color Card
 */
import { useReducer } from 'react';
import cn from 'classnames';
// Application
import { defaultGradients } from 'shared/base.data';
import { gradientReducer } from 'utils/reducers/GradientReducer';

const ColorCard = (): JSX.Element => {
  // Reducer
  const [gradientState, dispatch] = useReducer(gradientReducer, defaultGradients);
  return (
    <div className='firefox-padding-fix border-t p-5 pr-3 dark:border-lite-dark'>
      <h2 className='font-bold'>Colors</h2>
      <div className='mt-3 grid grid-cols-4 gap-3'>
        {gradientState.gradients.map((gradient) => (
          <button
            key={gradient.id}
            style={{
              background: cn('linear-gradient(to bottom right, ', gradient.from, ', ', gradient.to, ')')
            }}
            className={cn(
              'h-9 w-9 rounded-lg', 
              Object.is(JSON.stringify(gradient), JSON.stringify(gradientState.selectedGradient)) 
                ? 'ring-2 ring-blue-400' 
                : ''
            )}
            onClick={() => dispatch({
              type: 'selected-gradient',
              gradient: gradient
            })}
          />
        ))}
      </div>
    </div>
  );
}

export default ColorCard;