import ReactDOM from 'react-dom';

import { Toast } from 'components/toast';
import { TOAST_CONTAINER_ID } from 'data/constants';
import { Service } from 'services/toast-service';

export function removeToastHelper(this: Service, id: string): void {
  this.toasts = this.toasts.filter((toast) => toast.id !== id);

  const container = document.getElementById(TOAST_CONTAINER_ID);

  if (container) {
    ReactDOM.hydrate(
      this.toasts.map((toast) => <Toast data={toast} key={toast.id} />),
      container
    );
  }
}
