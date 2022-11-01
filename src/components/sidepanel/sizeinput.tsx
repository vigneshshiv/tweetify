/**
 * Size Input
 */
import { Dispatch, KeyboardEvent, useEffect, useReducer, useRef, useState } from 'react';
// Application
import { arrowReducer } from 'utils/reducers/ArrowReducer';
import { isNumber } from 'utils/AppUtils';
import { arrowState } from 'shared/base.data';
import { SizeConfigAction } from 'utils/types/base.types';

type SizeProps = {
  label: string;
  data: number;
  sizeDispatcher: Dispatch<SizeConfigAction>
}

const SizeInput = ({ label, data, sizeDispatcher }: SizeProps): JSX.Element => {
  // Arrow
  const [arrow, arrowDispatcher] = useReducer(arrowReducer, arrowState);
  // Label Ref and databuffer states
  const _label_ref_ = useRef(null);
  const [dataBuffer, setDataBuffer] = useState('');
  const [isPLRequested, setIsPLRequested] = useState(false);

  useEffect(() => {
    setDataBuffer(data + '');
    return () => setDataBuffer('');
  }, [data]);

  const keyDownHandler = (e: KeyboardEvent): void => {
    switch (e.code) {
      case 'ArrowUp':
        dispatchHandler(sizeDispatcher!, +dataBuffer + 1);
        break;
      case 'ArrowDown':
        dispatchHandler(sizeDispatcher!, +dataBuffer - 1);
        break;
      case 'Enter':
      case 'NumpadEnter':
        break;
      default:
        console.warn(`SizeInput keydown handler event key code - ${e.code}`);
    }
  }

  const dispatchHandler = (sizeDispatcher: Dispatch<SizeConfigAction>, value: number): void => {
    switch (label) {
      case 'H': 
        sizeDispatcher({
          type: 'height',
          height: value
        });
        break;
      case 'W':
        sizeDispatcher({
          type: 'width',
          width: value
        });
        break;
      case 'R':
        sizeDispatcher({
          type: 'radius',
          radius: value
        });
        break;
      case 'O':
        sizeDispatcher({
          type: 'opacity',
          opacity: value
        });
        break;
      default:
        break;
    }
  }

  const dispatchOrResetDataBuffer = (): void => {
    if (dataBuffer && isNumber(dataBuffer)) {
      dispatchHandler(sizeDispatcher!, +dataBuffer);
    } else {
      setDataBuffer(data + '');
    }
  }

  const mouseDownHandler = (e: any): void => {
    arrowDispatcher({
      type: 'all', 
      state: {
        visible: true,
        X: e.clientX - 10,
        Y: e.clientY - 10
      }
    });
    // PLRequested?
    if (!isPLRequested) {
      document.addEventListener('pointerlockchange', pointerLockChangeHandler);
      setIsPLRequested(true);
    }
    e.target.requestPointerLock();
  }

  const incrementXRange = (e: any): void => {
    arrowDispatcher({
      type: 'X',
      X: arrow.X + e.movementX
    });
    dispatchHandler(sizeDispatcher!, e.movementX + data);
  }

  const mouseUpHandler = (): void => {
    document.exitPointerLock();
    arrowDispatcher({
      type: 'visible',
      visible: false
    });
  }

  const pointerLockChangeHandler = (): void => {
    if (Object.is(document.pointerLockElement, _label_ref_.current)) {
      document.addEventListener('mousemove', incrementXRange);
    } else {
      document.removeEventListener('mousemove', incrementXRange);
    }
  }

  return (
    <label className='flex h-7 border border-transparent text-xs focus-within:border-blue-400 focus-within:ring-blue-400 hover:border-gray-200 hover:focus-within:border-blue-400 dark:hover:border-border-dark dark:hover:focus-within:border-blue-400'>
      <span
        ref={_label_ref_}
        onMouseDown={mouseDownHandler}
        onMouseUp={mouseUpHandler}
        className='flex w-[37%] items-center justify-center cursor-ew-resize select-none text-slate-500 dark:text-[#808080]'
      >
        {label}
      </span>
      <input 
        type='text'
        value={dataBuffer}
        onChange={(e) => setDataBuffer(e.target.value)}
        onBlur={dispatchOrResetDataBuffer}
        onClick={(e: any) => e.target.select()}
        onKeyDown={keyDownHandler}
        className='block w-[63%] cursor-default focus:outline-none dark:bg-transparent dark:text-white'
      />
    </label>
  );
}

export default SizeInput;