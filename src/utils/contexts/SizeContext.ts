/**
 * Size Context
 */
import { createContext, Dispatch, useContext } from 'react';
import { SizeConfig, SizeConfigAction } from 'utils/types/base.types';

// Contexts
export const SizeContext = createContext<SizeConfig | null>(null);
export const SizeDispatchContext = createContext<Dispatch<SizeConfigAction> | null>(null);

export const useSize = () => {
  return useContext(SizeContext);
}

export const useSizeDispatch = () => {
  return useContext(SizeDispatchContext);
}
