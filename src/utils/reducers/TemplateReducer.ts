/**
 * Template Reducer
 */
import { TemplateState, TemplateAction } from 'utils/types/base.types';

export const templateReducer = (template: TemplateState, action: TemplateAction): TemplateState => {
  switch (action.type) {
    case 'selected-template': {
      return {
        selectedTemplate: action.template
      }
    }
  }
}