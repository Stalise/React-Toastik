import React from 'react';

import { ToastContainer, ToastService } from '../../build/bundle';

import '../assest/styles/null.css';

export default {
  title: 'Toast',
  component: ToastContainer,
  argTypes: {
    type: {
      control: {
        type: 'radio',
        options: ['info', 'warning', 'error', 'success'],
      },
      defaultValue: 'info',
    },
    title: {
      control: { type: 'text' },
    },
    description: {
      control: { type: 'text' },
    },
    padding: {
      defaultValue: '15px 20px 15px 20px',
      control: { type: 'text' },
    },
    size: {
      defaultValue: 'medium',
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    'background-color': {
      control: { type: 'color' },
    },
    'animation-name': {
      defaultValue: 'fall',
      control: {
        type: 'select',
        options: ['fall', 'appear', 'turn'],
      },
    },
    'animation-duration': {
      defaultValue: 1000,
      description: '1000 = 1 sec',
      control: {
        type: 'number',
      },
    },
    'toast-lifetime': {
      description: '1000 = 1 sec.',
      control: {
        type: 'number',
      },
    },
  },
};

export const Example = (args) => {
  const showToast = () => {
    ToastService.addToast(args);
  };

  return (
    <>
      <ToastContainer position={args.position} />
      <button onClick={showToast}>Button</button>
    </>
  );
};
