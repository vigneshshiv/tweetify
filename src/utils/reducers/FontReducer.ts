/**
 * Font Reducer
 */
import { FontAction, FontState } from 'utils/types/base.types';

// Reducer
export const fontReducer = (font: FontState, action: FontAction): FontState => {
  switch (action.type) {
    case 'selected-font': {
      return {
        fonts: font.fonts,
        selectedFont: action.font
      }
    }
  }
}