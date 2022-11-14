/**
 * Base Types
 */
import { Dispatch, SetStateAction } from 'react';

export type Dispatcher<S> = Dispatch<SetStateAction<S>>;

export type Font = {
  id: string;
  name: string;
  value: any;
}

// Size Card State
export interface CardState {
  height: number;
  width: number;
  radius: number;
  opacity: number;
  font: Font;
  setHeight: (callback: (height: number) => number) => void;
  setWidth: (callback: (width: number) => number) => void;
  setRadius: (callback: (radius: number) => number) => void;
  setOpacity: (callback: (opacity: number) => number) => void;
  setFont: (callback: (fonts: Font) => Font) => void;
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
export interface PanelState {
  isSpaceDown: boolean;
  isMouseDown: boolean;
  moveBy: MoveBy;
  setIsSpaceDown: (callback: (spaceDown: boolean) => boolean) => void;
  setIsMouseDown: (callback: (mouseDown: boolean) => boolean) => void;
  setMoveBy: (callback: (moveBy: MoveBy) => MoveBy) => void;
}

// Tweet State

type TweetInfo = {
  profileImage: string;
  name: string;
  username: string;
  text: string;
  createdAt: string;
  retweets: number;
  replies: number;
  likes: number;
}

export interface TweetState {
  tweetInfo: TweetInfo;
  isMetricsVisible: boolean;
  setTweetInfo: (callback: (tweetInfo: TweetInfo) => TweetInfo) => void;
  setIsMetricsVisible: (callback: (metricsVisible: boolean) => boolean) => void;
}