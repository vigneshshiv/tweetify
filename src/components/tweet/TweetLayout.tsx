/**
 * Resizable Tweet
 */
import { MutableRefObject, useEffect, useState } from 'react';
import { Resizable } from 're-resizable';
import cn from 'classnames';
// Application
import { useCardStore } from 'utils/store/card.store';
import { defaultSize, SizeConfigRange } from 'shared/base.data';
import { useGradientStore } from 'utils/store/gradient.store';
 
const TweetLayout = ({ rootRef }: { rootRef : MutableRefObject<HTMLDivElement | null> }): JSX.Element => {
  const [widthBuffer, setWidthBuffer] = useState(defaultSize.width);
  const [heightBuffer, setHeightBuffer] = useState(defaultSize.height);
  // Width
  const cardWidth = useCardStore((state) => state.width);
  const setWidth = useCardStore((state) => state.setWidth);
  // Height
  const cardHeight = useCardStore((state) => state.height);
  const setHeight = useCardStore((state) => state.setHeight);
  // Radius
  const radius = useCardStore((state) => state.radius);
  // Gradient
  const gradient = useGradientStore((state) => state.selectedGradient);

  useEffect(() => {
    setWidth(() => widthBuffer);
  }, [widthBuffer, setWidth]);

  useEffect(() => {
    setHeight(() => heightBuffer);
  }, [heightBuffer, setHeight]);

  const resizeStopHandler = (): void => {
    if (widthBuffer < SizeConfigRange.MIN_WIDTH) {
      setWidthBuffer(SizeConfigRange.MIN_WIDTH);
    }
    if (heightBuffer < SizeConfigRange.MIN_HEIGHT) {
      setHeightBuffer(SizeConfigRange.MIN_HEIGHT);
    }
  }

  const resizeHandler = (e: any, direction: any): void => {
    switch (direction) {
      case 'left':
        setWidthBuffer((width) => width - e.movementX);
        break;
      case 'right':
        setWidthBuffer((width) => width + e.movementX);
        break;
      case 'top':
        setHeightBuffer((height) => height - e.movementY);
        break;
      case 'bottom':
        setHeightBuffer((height) => height + e.movementY);
        break;
      case 'topLeft':
        setWidthBuffer((width) => width - e.movementX);
        setHeightBuffer((height) => height - e.movementY);
        break;
      case 'topRight':
        setWidthBuffer((width) => width + e.movementX);
        setHeightBuffer((height) => height - e.movementY);
        break;
      case 'bottomLeft':
        setWidthBuffer((width) => width - e.movementX);
        setHeightBuffer((height) => height + e.movementY);
        break;
      case 'bottomRight':
        setWidthBuffer((width) => width + e.movementX);
        setHeightBuffer((height) => height + e.movementY);
        break;
      default: 
        console.warn(`Resizable direction default? - ${direction}`);
    }
  }

  return (
    <Resizable
      size={{ width: cardWidth, height: cardHeight }}
      onResize={resizeHandler}
      onResizeStop={resizeStopHandler}
      minHeight={SizeConfigRange.MIN_HEIGHT}
      minWidth={SizeConfigRange.MIN_WIDTH}
      className='lg:-translate-x-24'
    >
      <div
        ref={rootRef}
        style={{
          background: cn('linear-gradient(to bottom right, ', gradient.from, ', ', gradient.to, ')'),
          borderRadius: cn(radius, 'px')
        }}
        className='flex h-full items-center justify-center overflow-hidden py-16 px-20 leading-normal shadow-md'
      >
        {/* 
        <TweetContent /> */}
      </div>
    </Resizable>
  );
}

export default TweetLayout;