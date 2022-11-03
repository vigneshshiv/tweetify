/**
 * Base Types
 */
import React, { Dispatch, SetStateAction } from 'react';

export type Dispatcher<S> = Dispatch<SetStateAction<S>>;

export type Font = {
  id: string;
  name: string;
  value: any;
}

// Zustand Types
// Size Card State
export interface CardState {
  height: number;
  width: number;
  radius: number;
  opacity: number;
  fonts: Font[];
  setHeight: (callback: (height: number) => number) => void;
  setWidth: (callback: (width: number) => number) => void;
  setRadius: (callback: (radius: number) => number) => void;
  setOpacity: (callback: (opacity: number) => number) => void;
  setFonts: (callback: (fonts: Font[]) => Font[]) => void;
}

// Arrow State
export interface ArrowState {
  isArrowVisible: boolean;
  X: number;
  Y: number;
  setIsArrowVisible: (callback: (isArrowVisible: boolean) => boolean) => void;
  setX: (callback: (X: number) => number) => void;
  setY: (callback: (Y: number) => number) => void;
}

// Gradient
export type Gradient = {
  id: number;
  from: string;
  to: string;
}

// Gradient State
export interface GradientState {
  gradients: Gradient[];
  selectedGradient: Gradient;
  setGradients: (callback: (gradients: Gradient[]) => Gradient[]) => void;
  setSelectedGradient: (callback: (selectedGradient: Gradient) => Gradient) => void;
}

// Template
export type Template = 
  | 'standard'
  | 'sleek'
  | 'justify';

// Template State
export interface TemplateState {
  selectedTemplate: Template;
  setSelectedTemplate: (callback: (selectedTemplate: Template) => Template) => void;
}

// MoveBy & Panel State
export type MoveBy = {
  X: number;
  Y: number;
}

// Panel State
export type PanelState = {
  isSpaceDown: boolean;
  isMouseDown: boolean;
  moveBy: MoveBy;
  setIsSpaceDown: (callback: (spaceDown: boolean) => boolean) => void;
  setIsMouseDown: (callback: (mouseDown: boolean) => boolean) => void;
  setMoveBy: (callback: (moveBy: MoveBy) => MoveBy) => void;
}
