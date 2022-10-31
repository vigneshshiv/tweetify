/**
 * Base Types
 */
import React, { Dispatch, SetStateAction } from 'react';

export type Dispatcher<S> = Dispatch<SetStateAction<S>>;