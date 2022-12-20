import type { ToastDataType } from 'types/toast';
import { addToastHelper } from 'utils/add-toast-helper';
import { removeToastHelper } from 'utils/remove-toast-helper';

export class Service {
  private static instance: Service;
  protected toasts: ToastDataType[] = [];

  constructor() {
    if (Service.instance) {
      return Service.instance;
    }

    Service.instance = this;
  }

  addToast(data: ToastDataType) {
    addToastHelper.call(this, data);
  }

  removeToast(id: string) {
    removeToastHelper.call(this, id);
  }
}

export const ToastService = new Service();
