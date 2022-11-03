/**
 * Size Input
 */
import { KeyboardEvent, useEffect, useRef, useState } from 'react';
// Application
import { isNumber } from 'utils/AppUtils';
import { useArrowStore } from 'utils/store/arrow.store';

type SizeProps = {
  label: string;
  data: number;
  action: (callback: (value: number) => number) => void;
}

const SizeInput = ({ label, data, action: setData }: SizeProps): JSX.Element => {
  // Label Ref and databuffer states
  const labelRef = useRef(null);
  const [dataBuffer, setDataBuffer] = useState('');
  const [isPLRequested, setIsPLRequested] = useState(false);
  // Arrow Store
  const setIsArrowVisible = useArrowStore((state) => state.setIsArrowVisible);
  const setX = useArrowStore((state) => state.setX);
  const setY = useArrowStore((state) => state.setY);

  useEffect(() => {
    setDataBuffer(data + '');
    return () => setDataBuffer('');
  }, [data]);

  const keyDownHandler = (e: KeyboardEvent): void => {
    switch (e.code) {
      case 'ArrowUp':
        setData(() => +dataBuffer + 1);
        break;
      case 'ArrowDown':
        setData(() => +dataBuffer - 1);
        break;
      case 'Enter':
      case 'NumpadEnter':
        break;
      default:
        console.warn(`SizeInput keydown handler event key code - ${e.code}`);
    }
  }

  const dispatchOrResetDataBuffer = (): void => {
    if (dataBuffer && isNumber(dataBuffer)) {
      setData(() => +dataBuffer);
    } else {
      setDataBuffer(data + '');
    }
  }

  const mouseDownHandler = (e: any): void => {
    setIsArrowVisible(() => true);
    setX(() => e.clientX - 10);
    setY(() => e.clientY - 10);
    // PLRequested?
    if (!isPLRequested) {
      document.addEventListener('pointerlockchange', pointerLockChangeHandler);
      setIsPLRequested(true);
    }
    e.target.requestPointerLock();
  }

  const incrementXRange = (e: any): void => {
    setX((X) => X + e.movementX);
    setData((data) => data + e.movementX);
  }

  const mouseUpHandler = (): void => {
    document.exitPointerLock();
    setIsArrowVisible(() => false);
  }

  const pointerLockChangeHandler = (): void => {
    if (Object.is(document.pointerLockElement, labelRef.current)) {
      document.addEventListener('mousemove', incrementXRange);
    } else {
      document.removeEventListener('mousemove', incrementXRange);
    }
  }

  return (
    <label className='flex h-7 border border-transparent text-xs focus-within:border-blue-400 focus-within:ring-blue-400 hover:border-gray-200 hover:focus-within:border-blue-400 dark:hover:border-border-dark dark:hover:focus-within:border-blue-400'>
      <span
        ref={labelRef}
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