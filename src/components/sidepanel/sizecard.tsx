/**
 * Size Card
 */
import { useReducer } from 'react';
// Application
import { sizeReducer } from 'utils/reducers/SizeReducer';
import { defaultSize } from 'shared/base.data';
import SizeInput from './sizeinput';

const SizeCard = (): JSX.Element => {
  // Reducer function
  const [size, dispatch] = useReducer(sizeReducer, defaultSize);
  // Each has it's own size dispatcher
  return (
    <div className='firefox-padding-fix p-5 pr-3'>
      <h2 className='font-bold'>Card</h2>
      <form className='-mx-3 mt-4 grid grid-cols-2 gap-y-1 gap-x-2'>
        <SizeInput label='W' data={size.width} sizeDispatcher={dispatch} />
        <SizeInput label='H' data={size.height} sizeDispatcher={dispatch} />
        <SizeInput label='R' data={size.radius} sizeDispatcher={dispatch} />
        <SizeInput label='O' data={size.opacity} sizeDispatcher={dispatch} />
      </form>
    </div>
  );
}

export default SizeCard;