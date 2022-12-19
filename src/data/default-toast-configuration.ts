export const toastConfiguration = {
  default: {
    type: 'info',
    title: 'Title',
    description: 'Description',
    'background-color': '#9A40D3',
    icon: 'info-icon.svg',
    padding: '15px 20px 15px 20px',
    size: 'medium',
    'animation-name': 'fall',
    'animation-duration': 1000,
    'toast-lifetime': 0,
  },
  info: {
    'background-color': '#9A40D3',
    icon: 'info-icon.svg',
  },
  warning: {
    'background-color': '#F4E048',
    icon: 'warning-icon.svg',
  },
  error: {
    'background-color': '#E25837',
    icon: 'error-icon.svg',
  },
  success: {
    'background-color': '#37E29A',
    icon: 'check-icon.svg',
  },
};
