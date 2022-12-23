import { ToastContainer } from 'components/toast-container';
import { ToastService } from 'services/toast-service';
import type { ToastDataType } from 'types/toast';
import type { PositionType } from 'types/toast-container';

import './index.scss';
import 'assets/styles/null.css';

type ArgsType = ToastDataType & { position: PositionType };

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
    text: {
      control: { type: 'text' },
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

export const Example = (args: ArgsType) => {
  const showToast = () => {
    ToastService.addToast(args);
  };

  return (
    <>
      <ToastContainer position={args.position} />
      <button className='button' onClick={showToast}>
        Create toast
      </button>
    </>
  );
};
