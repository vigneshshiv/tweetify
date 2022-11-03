/**
 * Arrow Store
 */
import create from 'zustand';
// Application
import { ArrowState } from 'utils/types/base.types';
import { arrowState } from 'shared/base.data';

export const useArrowStore = create<ArrowState>((set) => ({
  isArrowVisible: arrowState.isArrowVisible,
  X: arrowState.X,
  Y: arrowState.Y,
  setIsArrowVisible(callback) {
    set((state) => ({ isArrowVisible: callback(state.isArrowVisible) }));
  },
  setX(callback) {
    set(({ X }) => {
      if (X > window.innerWidth) {
        return { X: -20 };
      } else if (X < -20) {
        return { X: window.innerWidth };
      }
      return { X: callback(X) };
    });
  },
  setY(callback) {
    set(({ Y }) => ({ Y: callback(Y) }));
  }
}));