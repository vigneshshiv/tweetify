/**
 * Gradient Reducer
 */
import { GradientAction, GradientState } from 'utils/types/base.types';

// Reducer
export const gradientReducer = (gradient: GradientState, action: GradientAction): GradientState => {
  switch (action.type) {
    case 'selected-gradient': {
      return {
        gradients: gradient.gradients,
        selectedGradient: action.gradient
      }
    }
  }
}