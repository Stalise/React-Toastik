export type ToastSizesType = 'small' | 'medium' | 'large';
export type ToastTypesType = 'info' | 'warning' | 'error' | 'success';

export type ToastDataType = {
  type: ToastTypesType;
  text: string;
  ['animation-name']?: string;
  ['animation-duration']?: number;
  ['toast-lifetime']?: number;
  id?: string;
};
