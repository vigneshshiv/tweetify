/**
 * Base Types
 */
import React, { Dispatch, SetStateAction } from 'react';

export type Dispatcher<S> = Dispatch<SetStateAction<S>>;

// Size Config
export type SizeConfig = {
  height: number;
  width: number;
  radius: number;
  opacity: number;
}

export type SizeConfigAction = 
  | { type: 'height'; height: number }
  | { type: 'width'; width: number }
  | { type: 'radius'; radius: number }
  | { type: 'opacity'; opacity: number };

// Arrow State
export type ArrowState = {
  isArrowVisible: boolean;
  X: number;
  Y: number;
}

export type ArrowStateAction = 
  | { type: 'visible'; visible: boolean }
  | { type: 'X'; X: number }
  | { type: 'Y'; Y: number }
  | { type: 'all'; state: {
    visible: boolean, 
    X: number, 
    Y: number
  }};

