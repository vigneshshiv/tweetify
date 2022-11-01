/**
 * Size Provider for Side Panel
 */
import React, { ReactNode, useReducer } from 'react';
// Application
import { SizeContext, SizeDispatchContext } from 'utils/contexts/SizeContext';
import { sizeReducer } from 'utils/reducers/SizeReducer';
import { defaultSize } from 'shared/base.data';

const SizeProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  // Reducer function
  const [size, dispatch] = useReducer(sizeReducer, defaultSize);
  // Wraps with Context Provider
  return (
    <SizeContext.Provider value={size}>
      <SizeDispatchContext.Provider value={dispatch}>
        {children}
      </SizeDispatchContext.Provider>
    </SizeContext.Provider>
  );
}

export default SizeProvider;