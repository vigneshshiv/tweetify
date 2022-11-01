/**
 * Size Reducer
 */
import { SizeConfigRange } from 'shared/base.data';
import { SizeConfig, SizeConfigAction } from 'utils/types/base.types';

// Reducer
export const sizeReducer = (size: SizeConfig, action: SizeConfigAction): SizeConfig => {
  switch (action.type) {
    case 'height': {
      return {
        ...size,
        height: getValueInRange(action.height, SizeConfigRange.MIN_HEIGHT)
      }
    }
    case 'width': {
      return {
        ...size,
        width: getValueInRange(action.width, SizeConfigRange.MIN_WIDTH)
      }
    }
    case 'radius': {
      return {
        ...size,
        radius: getValueInRange(action.radius, SizeConfigRange.MIN_RADIUS)
      }
    }
    case 'opacity': {
      return {
        ...size,
        opacity: getValueInRange(action.opacity, SizeConfigRange.MIN_OPACITY, SizeConfigRange.MAX_OPACITY)
      }
    }
  }
}

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