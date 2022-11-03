/**
 * Card Store
 */
import create from 'zustand';
// Application
import { CardState } from 'utils/types/base.types';
import { defaultSize, defaultFonts, SizeConfigRange } from 'shared/base.data';

export const useCardStore = create<CardState>((set) => ({
  height: defaultSize.height,
  width: defaultSize.width,
  radius: defaultSize.radius,
  opacity: defaultSize.opacity,
  fonts: defaultFonts.fonts,
  setHeight(callback) {
    set(({ height }) => ({
      height: getValueInRange(callback(height), SizeConfigRange.MIN_HEIGHT)
    }));
  },
  setWidth(callback) {
    set(({ width }) => ({
      width: getValueInRange(callback(width), SizeConfigRange.MIN_WIDTH)
    }));
  },
  setRadius(callback) {
    set(({ radius }) => ({
      radius: getValueInRange(callback(radius), SizeConfigRange.MIN_RADIUS)
    }));
  },
  setOpacity(callback) {
    set(({ opacity }) => ({
      opacity: getValueInRange(callback(opacity), SizeConfigRange.MIN_OPACITY, SizeConfigRange.MAX_OPACITY)
    }));
  },
  setFonts(callback) {
    set(({ fonts }) => ({
      fonts: callback(fonts)
    }));
  }
}));

/* Get value in range utility */
const getValueInRange = (value: number, min?: number, max?: number): number => {
  let valueInRange = value;
  if (min) {
    valueInRange = Math.max(valueInRange, min);
  }
  if (max) {
    valueInRange = Math.min(valueInRange, max);
  }
  return valueInRange;
}