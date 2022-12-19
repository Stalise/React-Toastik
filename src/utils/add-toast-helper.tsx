import ReactDOM from 'react-dom';
import { v4 as uuidv4 } from 'uuid';

import { Toast } from 'components/toast';
import { toastConfiguration } from 'data/default-toast-configuration';
import { TOAST_CONTAINER_ID } from 'data/constants';
import type { ToastDataType } from 'types/toast';

export const addToastHelper = (
  data: ToastDataType,
  toasts: ToastDataType[]
): void => {
  const toast: ToastDataType = {
    ...toastConfiguration.default,
    ...toastConfiguration[data.type],
    ...data,
    id: uuidv4(),
  };

  toasts.push(toast);

  const container = document.getElementById(TOAST_CONTAINER_ID);

  if (container) {
    ReactDOM.hydrate(
      toasts.map((toast) => <Toast data={toast} key={toast.id} />),
      container
    );
  }
};
