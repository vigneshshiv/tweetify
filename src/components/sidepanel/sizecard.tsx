/**
 * Size Card
 */

import SizeProvider from 'components/providers/SizeProvider';
import SizeInput from './sizeinput';

const SizeCard = (): JSX.Element => {
  return (
    <div className='firefox-padding-fix p-5 pr-3'>
      <h2 className='font-bold'>Card</h2>
      <form className='-mx-3 mt-4 grid grid-cols-2 gap-y-1 gap-x-2'>
        <SizeProvider>
          <SizeInput label='W' />
          <SizeInput label='H' />
          <SizeInput label='R' />
          <SizeInput label='O' />
        </SizeProvider>
      </form>
    </div>
  );
}

export default SizeCard;