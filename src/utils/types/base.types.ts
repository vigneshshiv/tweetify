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

export type Font = {
  id: string;
  name: string;
  value: any;
}

export type FontState = {
  fonts: Font[];
  selectedFont: Font;
}

export type FontAction = { type: 'selected-font'; font: Font }

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

// Gradient
export type Gradient = {
  id: number;
  from: string;
  to: string;
}

export type GradientState = {
  gradients: Gradient[];
  selectedGradient: Gradient;
}

export type GradientAction = { type: 'selected-gradient'; gradient: Gradient };

// Template
export type Template = 
  | 'standard'
  | 'sleek'
  | 'justify';

export type TemplateState = {
  selectedTemplate: Template;
}

export type TemplateAction = { type: 'selected-template'; template: Template };