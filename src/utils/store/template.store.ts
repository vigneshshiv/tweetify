/**
 * Template Store
 */
import create from 'zustand';
// Application
import { TemplateState } from 'utils/types/base.types';
import { defaultTemplate } from 'shared/base.data';

export const useTemplateStore = create<TemplateState>((set) => ({
  selectedTemplate: defaultTemplate.selectedTemplate,
  setSelectedTemplate(callback) {
    set(({ selectedTemplate }) => ({
      selectedTemplate: callback(selectedTemplate)
    }));
  }
}));
