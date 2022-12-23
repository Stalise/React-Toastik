import ReactDOM from 'react-dom';
import { v4 as uuidv4 } from 'uuid';

import { Toast } from 'components/toast';
import { Service } from 'services/toast-service';
import { toastConfiguration } from 'data/default-toast-configuration';
import { TOAST_CONTAINER_ID } from 'data/constants';
import type { ToastDataType } from 'types/toast';

export function addToastHelper(this: Service, data: ToastDataType): void {
  const toast: ToastDataType = {
    ...toastConfiguration,
    ...data,
    id: uuidv4(),
  };

  this.toasts.push(toast);

  const container = document.getElementById(TOAST_CONTAINER_ID);

  if (container) {
    ReactDOM.hydrate(
      this.toasts.map((toast) => <Toast data={toast} key={toast.id} />),
      container
    );
  }
}
