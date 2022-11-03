/**
 * Gradient Store
 */
import create from 'zustand';
// Application
import { GradientState } from 'utils/types/base.types';
import { defaultGradients } from 'shared/base.data';

export const useGradientStore = create<GradientState>((set) => ({
  gradients: defaultGradients.gradients,
  selectedGradient: defaultGradients.gradients[0],
  setGradients(callback) {
    set(({ gradients }) => ({ gradients: callback(gradients) }));
  },
  setSelectedGradient(callback) {
    set(({ selectedGradient }) => ({
      selectedGradient: callback(selectedGradient)
    }));
  }
}));