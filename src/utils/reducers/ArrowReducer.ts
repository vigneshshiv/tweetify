/**
 * Arrow Reducer
 */

import { ArrowState, ArrowStateAction } from 'utils/types/base.types';

export const arrowReducer = (arrow: ArrowState, action: ArrowStateAction): ArrowState => {
  switch (action.type) {
    case 'visible': {
      return {
        ...arrow,
        isArrowVisible: action.visible
      }
    }
    case 'X': {
      const setXRange = (X: number): number => {
        if (X > window.innerWidth) {
          return -20;
        } else if (X < -20) {
          return window.innerWidth;
        }
        return action.X;
      }
      return {
        ...arrow,
        X: setXRange(action.X)
      }
    }
    case 'Y': {
      return {
        ...arrow,
        Y: action.Y
      }
    }
    case 'all': {
      // Replace all
      return {
        ...action.state,
        isArrowVisible: action.state.visible
      }
    }
  }
}