export type ToastDataType = {
  type: 'info' | 'warning' | 'error' | 'success';
  title?: string;
  description?: string;
  ['background-color']?: string;
  icon?: string;
  padding?: string;
  size?: string;
  ['animation-name']?: string;
  ['animation-duration']?: number;
  ['toast-lifetime']?: number;
  id?: string;
};

export type PositionType =
  | 'top-right'
  | 'bottom-right'
  | 'top-left'
  | 'bottom-left';
