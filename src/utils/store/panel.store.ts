/**
 * Panel Store
 */
import create from 'zustand';
// Application
import { PanelState } from 'utils/types/base.types';
import { defaultPanel } from 'shared/base.data';

export const usePanelStore = create<PanelState>((set) => ({
  isSpaceDown: defaultPanel.isSpaceDown,
  isMouseDown: defaultPanel.isMouseDown,
  moveBy: defaultPanel.moveBy,
  setIsSpaceDown(callback) {
    set(({ isSpaceDown }) => ({ isSpaceDown: callback(isSpaceDown) }));
  },
  setIsMouseDown(callback) {
    set(({ isMouseDown }) => ({ isMouseDown: callback(isMouseDown) }));
  },
  setMoveBy(callback) {
    set(({ moveBy }) => ({ moveBy: callback(moveBy) }));
  }
}));