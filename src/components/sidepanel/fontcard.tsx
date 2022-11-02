/**
 * Font Card
 */
import { Fragment, useReducer, useState, useEffect } from 'react';
import cn from 'classnames';
import { Listbox, Switch, Transition} from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
// Application
import { fontReducer } from 'utils/reducers/FontReducer';
import { defaultFonts } from 'shared/base.data';
import { Font } from 'utils/types/base.types';


const FontCard = (): JSX.Element => {
  const [metricsVisible, setMetricsVisible] = useState(false);
  // Reducer
  const [fontState, dispatch] = useReducer(fontReducer, defaultFonts);
  
  const fontChangeHandler = (font: Font): void => {
    dispatch({
      type: 'selected-font',
      font: font
    });
  }

  return (
    <div className='firefox-padding-fix border-t p-5 pr-3 dark:border-lite-dark'>
      <h2 className='font-bold'>Text</h2>
      <Listbox value={fontState.selectedFont} onChange={fontChangeHandler}>
        <div className='mt-3 flex items-center gap-x-4'>
          <Listbox.Label className='text-gray-500'>
            Font
          </Listbox.Label>
          <div className='relative mt-1 flex-grow'>
            <Listbox.Button
              className='relative w-full cursor-default rounded-lg sm:text-sm bg-white py-2 pl-3 pr-10 text-left shadow-md 
                focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white 
                focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 
                dark:bg-neutral-600 dark:text-white'
            >
              <span className='block truncate'>{fontState.selectedFont.name}</span>
              <span className='pointer-events-none absolute flex items-center inset-y-0 right-0 pr-2'>
                <ChevronUpDownIcon 
                  aria-hidden='true'
                  className='h-5 w-5 text-gray-400'
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Listbox.Options
                className='absolute z-10 w-full max-h-60 overflow-auto mt-1 rounded-md bg-white py-1 text-base
                shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-neutral-600 sm:text-sm'
              >
                {fontState.fonts.map((font, idx) => (
                  <Listbox.Option
                    key={idx}
                    className={({ active }) => cn(
                      'relative cursor-default select-none py-2 pl-3 pr-4 ', 
                        active ? 'bg-amber-100 text-amber-900' : 'text-gray-900 dark:text-white'
                    )}
                    value={font}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={cn(
                            'block truncate ', selected ? 'font-medium' : 'font-normal'
                          )}
                        >
                          {font.name}
                        </span>
                        {selected ? (
                          <span className='absolute flex items-center right-0 inset-y-0 pr-3 text-amber-600 dark:text-amber-500'>
                            <CheckIcon aria-hidden='true' className='h-4 w-4' />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </div>
      </Listbox>
      <Switch.Group>
        <div className='flex items-center justify-between mt-3'>
          <Switch.Label className='mr-4 text-gray-500'>
            Public Metrics
          </Switch.Label>
          <Switch
            checked={metricsVisible}
            onChange={() => setMetricsVisible(!metricsVisible)}
            className={cn('relative h-6 w-11 inline-flex items-center rounded-full transition-colors',
              metricsVisible ? 'bg-blue-600' : 'bg-gray-200 dark:bg-neutral-600'
            )}
          >
            <span 
              className={cn('inline-block h-4 w-4 rounded-full bg-white transform transition-transform ',
                metricsVisible ? 'translate-x-6' : 'translate-x-1'
              )}
            />
          </Switch>
        </div>
      </Switch.Group>
    </div>
  );
}

export default FontCard;