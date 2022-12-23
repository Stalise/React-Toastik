import type { ToastDataType } from 'types/toast';

export const toastConfiguration: Partial<ToastDataType> = {
  type: 'info',
  'animation-name': 'fall',
  'animation-duration': 1000,
  'toast-lifetime': 0,
};

export const backgroundColors = {
  info: '#9a40d3',
  warning: '#f4e048',
  error: '#e25837',
  success: '#37e29a',
};
