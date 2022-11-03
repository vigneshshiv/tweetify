/**
 * Tweet Card
 */
import { MutableRefObject, RefObject, useEffect } from 'react';
import cn from 'classnames';
// Application
import { usePanelStore } from 'utils/store/panel.store';
import TweetLayout from './TweetLayout';

const TweetCard = ({ rootRef }: { rootRef : MutableRefObject<HTMLDivElement | null> }): JSX.Element => {
  const isSpaceDown = usePanelStore((state) => state.isSpaceDown);
  const setIsSpaceDown = usePanelStore((state) => state.setIsSpaceDown);
  //
  const isMouseDown = usePanelStore((state) => state.isMouseDown);
  const setIsMouseDown = usePanelStore((state) => state.setIsMouseDown);
  //
  const moveBy = usePanelStore((state) => state.moveBy);
  const setMoveBy = usePanelStore((state) => state.setMoveBy);

  // Space down event
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (Object.is(e.code, 'Space')) {
        setIsSpaceDown(() => true);
      }
    });
    document.addEventListener('keyup', (e) => {
      if (Object.is(e.code, 'Space')) {
        setIsSpaceDown(() => false);
      }
    });
  }, [setIsSpaceDown]);

  const mouseDownHandler = (): void => {
    setIsMouseDown(() => true);
  }

  const mouseUpHandler = (): void => {
    setIsMouseDown(() => false);
  }

  const mouseMoveHandler = (e: any): void => {
    if (isMouseDown && isSpaceDown) {
      setMoveBy(() => ({
        X: moveBy.X + e.movementX,
        Y: moveBy.Y + e.movementY
      }));
    }
  }

  return (
    <div
      onMouseDown={mouseDownHandler}
      onMouseUp={mouseUpHandler}
      onMouseMove={mouseMoveHandler}
      style={{
        transform: cn('translate(', moveBy.X, 'px, ', moveBy.Y, 'px)')
      }}
      className={cn(
        isSpaceDown 
          ? isMouseDown 
              ? 'cursor-grabbing select-none'
              : 'cursor-grab select-auto'
          : ''
      )}
    >
      <TweetLayout rootRef={rootRef} />
    </div>
  );
}

export default TweetCard;